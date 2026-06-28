import { useState } from "react";
import { useI18n } from "./i18n/I18nProvider";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Advantages } from "./components/Advantages";
import { Process } from "./components/Process";
import { Services } from "./components/Services";
import { Faq } from "./components/Faq";
import { Reserva } from "./components/Reserva";
import { Footer } from "./components/Footer";

export default function App() {
  const { t } = useI18n();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <a
        href="#inicio"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-5 focus:py-2.5 focus:font-heading focus:text-[14px] focus:text-white"
      >
        {t.a11y.skip}
      </a>

      <Navbar onMenuToggle={() => setMenuOpen(true)} />
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

      <main>
        <Hero />
        <About />
        <Advantages />
        <Process />
        <Services />
        <Faq />
        <Reserva />
      </main>

      <Footer />
    </>
  );
}
