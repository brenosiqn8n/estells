import { useEffect, useState } from "react";

// Center hours: Mon–Fri 16:00–20:30 (Europe/Madrid). TODO: confirm real schedule.
const OPEN_MIN = 16 * 60; // 16:00
const CLOSE_MIN = 20 * 60 + 30; // 20:30

interface OpenStatus {
  open: boolean;
  time: string; // HH:MM in Europe/Madrid
}

function compute(): OpenStatus {
  const now = new Date();
  const parts = new Intl.DateTimeFormat("es-ES", {
    timeZone: "Europe/Madrid",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(now);

  const get = (type: string) =>
    parts.find((p) => p.type === type)?.value ?? "";

  const hour = parseInt(get("hour"), 10);
  const minute = parseInt(get("minute"), 10);
  const mins = hour * 60 + minute;

  // Weekday: derive 0=Sun..6=Sat via en-US short name to avoid locale ambiguity.
  const wdName = new Intl.DateTimeFormat("en-US", {
    timeZone: "Europe/Madrid",
    weekday: "short",
  }).format(now);
  const isWeekday = ["Mon", "Tue", "Wed", "Thu", "Fri"].includes(wdName);

  const open = isWeekday && mins >= OPEN_MIN && mins < CLOSE_MIN;
  const time = `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
  return { open, time };
}

export function useOpenStatus(): OpenStatus {
  const [status, setStatus] = useState<OpenStatus>(compute);

  useEffect(() => {
    const id = window.setInterval(() => setStatus(compute()), 30_000);
    return () => window.clearInterval(id);
  }, []);

  return status;
}
