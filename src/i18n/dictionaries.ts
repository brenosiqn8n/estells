export type Lang = "es" | "va";

export interface Dict {
  nav: {
    inicio: string;
    servicios: string;
    centro: string;
    equipo: string;
    ventajas: string;
    proceso: string;
    faq: string;
    contacto: string;
    reserva: string;
    status: string;
    timeSuffix: string;
  };
  hero: {
    kicker: string;
    titleLines: [string, string, string];
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    chips: [string, string, string];
  };
  about: {
    badge: string;
    titleLines: [string, string];
    paragraphLines: [string, string, string];
    paragraphMobile: string;
    cta: string;
    teamKicker: string;
    hours: {
      title: string;
      openNow: string;
      closedNow: string;
      weekdays: string;
      weekend: string;
      closed: string;
      schedule: string;
      localTime: string;
    };
  };
  team: { role: string; bio: string }[];
  advantages: {
    badge: string;
    title: string;
    intro: string;
    items: { title: string; desc: string }[];
  };
  process: {
    badge: string;
    title: string;
    intro: string;
    steps: { title: string; desc: string }[];
  };
  services: {
    badge: string;
    title: string;
    note: string;
    cardCta: string;
    items: { title: string; desc: string; detail: string }[];
  };
  faq: {
    badge: string;
    title: string;
    items: { q: string; a: string }[];
  };
  reserva: {
    badge: string;
    modes: { reserva: string; contacto: string };
    title: string;
    subtitle: string;
    titleContacto: string;
    subtitleContacto: string;
    submitContacto: string;
    mailSubjectContacto: string;
    labels: {
      name: string;
      phone: string;
      email: string;
      age: string;
      subject: string;
      level: string;
      start: string;
      message: string;
      messagePlaceholder: string;
      optional: string;
    };
    levels: string[];
    submit: string;
    sending: string;
    success: string;
    error: string;
    whatsapp: string;
    privacy: string;
    mailSubject: string;
  };
  footer: {
    tagline: string;
    contactLabel: string;
    hoursLabel: string;
    weekdays: string;
    weekend: string;
    closed: string;
    cta: string;
    rights: string;
    region: string;
  };
  a11y: {
    skip: string;
    openMenu: string;
    closeMenu: string;
    langLabel: string;
  };
}

export const TEAM_NAMES = [
  { name: "Francesc Marí Simó", img: "frances-mari" },
  { name: "Lara", img: "lara" },
  { name: "Ricard", img: "ricard" },
  { name: "Virginia", img: "virginia" },
  { name: "Salva", img: "salva" },
];

export const es: Dict = {
  nav: {
    inicio: "Inicio",
    servicios: "Servicios",
    centro: "El centro",
    equipo: "Equipo",
    ventajas: "Ventajas",
    proceso: "Proceso",
    faq: "FAQ",
    contacto: "Contacto",
    reserva: "Reserva tu plaza",
    status: "Plazas abiertas · Curso 2026",
    timeSuffix: "en Alginet",
  },
  hero: {
    kicker: "Centre d'Estudis · Alginet",
    titleLines: ["Apoyo educativo cercano", "donde el aprendizaje", "cobra vida."],
    subtitle:
      "Clases de refuerzo, técnicas de estudio e idiomas para ESO y Bachillerato. De confianza y adaptado a ti.",
    ctaPrimary: "Empieza hoy",
    ctaSecondary: "Descubre más",
    chips: ["Grupos reducidos", "Atención personalizada", "ESO · Bachillerato · Idiomas"],
  },
  about: {
    badge: "Sobre Estells",
    titleLines: [
      "Un espacio de confianza, adaptado",
      "a las necesidades reales de cada alumno.",
    ],
    paragraphLines: [
      "Con método, cercanía y seguimiento",
      "continuo, ayudamos a cada alumno a",
      "avanzar a su ritmo y lograr sus metas.",
    ],
    paragraphMobile:
      "Con método, cercanía y seguimiento continuo, ayudamos a cada alumno a avanzar a su ritmo y alcanzar sus metas académicas.",
    cta: "Reserva tu plaza",
    teamKicker: "Nuestro equipo",
    hours: {
      title: "Horario del centro",
      openNow: "Abierto ahora",
      closedNow: "Cerrado ahora",
      weekdays: "Lunes – Viernes",
      weekend: "Sábado y domingo",
      closed: "Cerrado",
      schedule: "16:00 – 20:30",
      localTime: "Hora local",
    },
  },
  team: [
    {
      role: "Director · Ciencias y técnicas de estudio",
      bio: "Graduado en Química y Máster en Profesorado de Secundaria y Bachillerato (especialidad Matemáticas). Especializado en la preparación de las pruebas de acceso a la universidad y en técnicas de estudio.",
    },
    {
      role: "Profesora de Lengua",
      bio: "Graduada en Filología Catalana, con Minor en Lengua y Literatura Orientales y Máster en Profesorado de Secundaria y Bachillerato. Clases dinámicas que crean el ambiente ideal para aprender.",
    },
    {
      role: "Profesor de Lengua e Idiomas",
      bio: "Graduado en Filología Catalana, con Máster en Educación Secundaria y formación en enseñanza de idiomas. Apasionado de las lenguas, también cursó un Minor en Lengua y Literatura Portuguesas.",
    },
    {
      role: "Profesora de Matemáticas",
      bio: "Licenciada en Matemáticas y siempre ligada a la enseñanza. La voz de la experiencia que enseña y acompaña a cada alumno durante todo el proceso educativo.",
    },
    {
      role: "Profesor de Física",
      bio: "Graduado en Física y Máster en Física Avanzada, especialidad Astrofísica. Transmite su pasión por la ciencia para sembrar la semilla de futuras vocaciones científicas.",
    },
  ],
  advantages: {
    badge: "Por qué Estells",
    title: "Razones para confiar en nosotros.",
    intro:
      "Un centro pensado para que cada alumno se sienta acompañado y avance con seguridad.",
    items: [
      {
        title: "Atención personalizada",
        desc: "Conocemos a cada alumno y adaptamos el método a su forma de aprender.",
      },
      {
        title: "Grupos reducidos",
        desc: "Pocos alumnos por aula para una atención cercana y real.",
      },
      {
        title: "Seguimiento continuo",
        desc: "Acompañamiento constante y comunicación con las familias.",
      },
      {
        title: "Profesores especializados",
        desc: "Docentes por materia e idioma, con experiencia y vocación.",
      },
      {
        title: "Metodología propia",
        desc: "Técnicas de estudio, planificación y hábitos que perduran.",
      },
      {
        title: "En el centro de Alginet",
        desc: "Espacios equipados y bien comunicados, de fácil acceso.",
      },
    ],
  },
  process: {
    badge: "Cómo empezar",
    title: "Tres pasos y a estudiar.",
    intro: "Empezar en Estells es sencillo. Te acompañamos desde el primer día.",
    steps: [
      {
        title: "Contacta",
        desc: "Escríbenos o llámanos y cuéntanos qué necesita el alumno.",
      },
      {
        title: "Valoración inicial",
        desc: "Analizamos su nivel y objetivos para proponer el plan adecuado.",
      },
      {
        title: "Empieza",
        desc: "Reservamos su plaza y comienza con seguimiento desde el primer día.",
      },
    ],
  },
  services: {
    badge: "Nuestros servicios",
    title: "Todo para avanzar.",
    cardCta: "Más información",
    note: "También intensivos de verano (julio y agosto, máx. 6 por grupo) y clases especiales de preparación de exámenes y recuperaciones.",
    items: [
      {
        title: "Clases de Apoyo",
        desc: "Refuerzo personalizado para ESO y Bachillerato. Grupos reducidos con atención individualizada para progresar a tu ritmo.",
        detail: "Matemáticas · Física · Química · Lengua · y más",
      },
      {
        title: "Técnicas de Estudio",
        desc: "Métodos eficaces para mejorar tu rendimiento: planificación, memorización y gestión del tiempo.",
        detail: "Planificación · Memorización · Hábitos",
      },
      {
        title: "Idiomas",
        desc: "Inglés, francés, chino y más con profesores especializados. Metodología comunicativa y natural.",
        detail: "Inglés · Francés · Chino",
      },
      {
        title: "Cesión de Aulas",
        desc: "Espacios equipados para profesionales: talleres, clases particulares y reuniones. Flexibilidad horaria.",
        detail: "Talleres · Clases · Reuniones",
      },
    ],
  },
  faq: {
    badge: "Resolvemos tus dudas",
    title: "Preguntas frecuentes.",
    items: [
      {
        q: "¿A quién van dirigidas las clases?",
        a: "Principalmente a alumnos de ESO y Bachillerato, en clases de refuerzo, técnicas de estudio e idiomas. Consúltanos para otros niveles.",
      },
      {
        q: "¿De cuántos alumnos son los grupos?",
        a: "Trabajamos en grupos reducidos para garantizar una atención cercana e individualizada a cada alumno.",
      },
      {
        q: "¿Qué idiomas se imparten?",
        a: "Inglés, francés y chino, entre otros, con profesores especializados y una metodología comunicativa y natural.",
      },
      {
        q: "¿Se pueden alquilar las aulas?",
        a: "Sí. Disponemos de espacios equipados para profesionales: talleres, clases particulares o reuniones, con flexibilidad horaria.",
      },
      {
        q: "¿Cómo es el proceso de matrícula?",
        a: "Contáctanos, hacemos una valoración inicial del alumno y, si encaja, reservamos su plaza para empezar cuanto antes.",
      },
    ],
  },
  reserva: {
    badge: "Reserva tu plaza",
    modes: { reserva: "Reserva tu plaza", contacto: "Contacta con nosotros" },
    title: "Empieza en Estells.",
    subtitle:
      "Déjanos tus datos y te respondemos en menos de 24 horas. También intensivos de verano y clases especiales.",
    titleContacto: "Hablemos.",
    subtitleContacto:
      "¿Tienes una duda o quieres más información? Escríbenos y te respondemos en menos de 24 horas.",
    submitContacto: "Enviar mensaje",
    mailSubjectContacto: "Consulta · Estells",
    labels: {
      name: "Nombre completo",
      phone: "Teléfono",
      email: "Email",
      age: "Edad / curso del alumno",
      subject: "Asignatura o idioma",
      level: "Nivel",
      start: "Fecha de inicio preferida",
      message: "Mensaje",
      messagePlaceholder: "Cuéntanos qué necesitas (opcional)",
      optional: "opcional",
    },
    levels: ["Primaria", "ESO", "Bachillerato", "Idiomas", "Otro"],
    submit: "Solicitar reserva",
    sending: "Enviando…",
    success: "¡Listo! Abrimos tu correo para enviar la solicitud.",
    error: "Revisa los campos marcados.",
    whatsapp: "Escríbenos por WhatsApp",
    privacy: "Al enviar aceptas que contactemos contigo sobre tu solicitud.",
    mailSubject: "Reserva de plaza · Estells",
  },
  footer: {
    tagline:
      "Donde el aprendizaje cobra vida. Apoyo educativo cercano y personalizado en Alginet.",
    contactLabel: "Contacto",
    hoursLabel: "Horario",
    weekdays: "Lunes – Viernes",
    weekend: "Sábado – Domingo",
    closed: "Cerrado",
    cta: "Reserva tu plaza",
    rights: "© 2026 Estells Centre d'Estudis. Todos los derechos reservados.",
    region: "Alginet · València",
  },
  a11y: {
    skip: "Saltar al contenido",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    langLabel: "Cambiar idioma",
  },
};

export const va: Dict = {
  nav: {
    inicio: "Inici",
    servicios: "Serveis",
    centro: "El centre",
    equipo: "Equip",
    ventajas: "Avantatges",
    proceso: "Procés",
    faq: "FAQ",
    contacto: "Contacte",
    reserva: "Reserva la teua plaça",
    status: "Places obertes · Curs 2026",
    timeSuffix: "a Alginet",
  },
  hero: {
    kicker: "Centre d'Estudis · Alginet",
    titleLines: ["Suport educatiu pròxim", "on l'aprenentatge", "cobra vida."],
    subtitle:
      "Classes de reforç, tècniques d'estudi i idiomes per a ESO i Batxillerat. De confiança i adaptat a tu.",
    ctaPrimary: "Comença hui",
    ctaSecondary: "Descobreix més",
    chips: ["Grups reduïts", "Atenció personalitzada", "ESO · Batxillerat · Idiomes"],
  },
  about: {
    badge: "Sobre Estells",
    titleLines: [
      "Un espai de confiança, adaptat",
      "a les necessitats reals de cada alumne.",
    ],
    paragraphLines: [
      "Amb mètode, proximitat i seguiment",
      "continu, ajudem cada alumne a avançar",
      "al seu ritme i assolir les seues metes.",
    ],
    paragraphMobile:
      "Amb mètode, proximitat i seguiment continu, ajudem cada alumne a avançar al seu ritme i assolir les seues metes acadèmiques.",
    cta: "Reserva la teua plaça",
    teamKicker: "El nostre equip",
    hours: {
      title: "Horari del centre",
      openNow: "Obert ara",
      closedNow: "Tancat ara",
      weekdays: "Dilluns – Divendres",
      weekend: "Dissabte i diumenge",
      closed: "Tancat",
      schedule: "16:00 – 20:30",
      localTime: "Hora local",
    },
  },
  team: [
    {
      role: "Director · Ciències i tècniques d'estudi",
      bio: "Graduat en Química i Màster en Professorat de Secundària i Batxillerat (especialitat Matemàtiques). Especialitzat en la preparació de les proves d'accés a la universitat i en tècniques d'estudi.",
    },
    {
      role: "Professora de Llengua",
      bio: "Graduada en Filologia Catalana, amb Minor en Llengua i Literatura Orientals i Màster en Professorat de Secundària i Batxillerat. Classes dinàmiques que creen l'ambient ideal per a aprendre.",
    },
    {
      role: "Professor de Llengua i Idiomes",
      bio: "Graduat en Filologia Catalana, amb Màster en Educació Secundària i formació en ensenyament d'idiomes. Apassionat de les llengües, també va cursar un Minor en Llengua i Literatura Portugueses.",
    },
    {
      role: "Professora de Matemàtiques",
      bio: "Llicenciada en Matemàtiques i sempre lligada a l'ensenyament. La veu de l'experiència que ensenya i acompanya cada alumne durant tot el procés educatiu.",
    },
    {
      role: "Professor de Física",
      bio: "Graduat en Física i Màster en Física Avançada, especialitat Astrofísica. Transmet la seua passió per la ciència per a sembrar la llavor de futures vocacions científiques.",
    },
  ],
  advantages: {
    badge: "Per què Estells",
    title: "Raons per a confiar en nosaltres.",
    intro:
      "Un centre pensat perquè cada alumne se senta acompanyat i avance amb seguretat.",
    items: [
      {
        title: "Atenció personalitzada",
        desc: "Coneixem cada alumne i adaptem el mètode a la seua manera d'aprendre.",
      },
      {
        title: "Grups reduïts",
        desc: "Pocs alumnes per aula per a una atenció pròxima i real.",
      },
      {
        title: "Seguiment continu",
        desc: "Acompanyament constant i comunicació amb les famílies.",
      },
      {
        title: "Professorat especialitzat",
        desc: "Docents per matèria i idioma, amb experiència i vocació.",
      },
      {
        title: "Metodologia pròpia",
        desc: "Tècniques d'estudi, planificació i hàbits que perduren.",
      },
      {
        title: "Al centre d'Alginet",
        desc: "Espais equipats i ben comunicats, de fàcil accés.",
      },
    ],
  },
  process: {
    badge: "Com començar",
    title: "Tres passos i a estudiar.",
    intro: "Començar a Estells és senzill. T'acompanyem des del primer dia.",
    steps: [
      {
        title: "Contacta",
        desc: "Escriu-nos o telefona'ns i conta'ns què necessita l'alumne.",
      },
      {
        title: "Valoració inicial",
        desc: "Analitzem el seu nivell i objectius per a proposar el pla adequat.",
      },
      {
        title: "Comença",
        desc: "Reservem la seua plaça i comença amb seguiment des del primer dia.",
      },
    ],
  },
  services: {
    badge: "Els nostres serveis",
    title: "Tot per a avançar.",
    cardCta: "Més informació",
    note: "També intensius d'estiu (juliol i agost, màx. 6 per grup) i classes especials de preparació d'exàmens i recuperacions.",
    items: [
      {
        title: "Classes de Reforç",
        desc: "Reforç personalitzat per a ESO i Batxillerat. Grups reduïts amb atenció individualitzada per a progressar al teu ritme.",
        detail: "Matemàtiques · Física · Química · Llengua · i més",
      },
      {
        title: "Tècniques d'Estudi",
        desc: "Mètodes eficaços per a millorar el teu rendiment: planificació, memorització i gestió del temps.",
        detail: "Planificació · Memorització · Hàbits",
      },
      {
        title: "Idiomes",
        desc: "Anglés, francés, xinés i més amb professorat especialitzat. Metodologia comunicativa i natural.",
        detail: "Anglés · Francés · Xinés",
      },
      {
        title: "Cessió d'Aules",
        desc: "Espais equipats per a professionals: tallers, classes particulars i reunions. Flexibilitat horària.",
        detail: "Tallers · Classes · Reunions",
      },
    ],
  },
  faq: {
    badge: "Resolem els teus dubtes",
    title: "Preguntes freqüents.",
    items: [
      {
        q: "A qui van dirigides les classes?",
        a: "Principalment a alumnes d'ESO i Batxillerat, en classes de reforç, tècniques d'estudi i idiomes. Consulta'ns per a altres nivells.",
      },
      {
        q: "De quants alumnes són els grups?",
        a: "Treballem en grups reduïts per a garantir una atenció pròxima i individualitzada a cada alumne.",
      },
      {
        q: "Quins idiomes s'imparteixen?",
        a: "Anglés, francés i xinés, entre altres, amb professorat especialitzat i una metodologia comunicativa i natural.",
      },
      {
        q: "Es poden llogar les aules?",
        a: "Sí. Disposem d'espais equipats per a professionals: tallers, classes particulars o reunions, amb flexibilitat horària.",
      },
      {
        q: "Com és el procés de matrícula?",
        a: "Contacta'ns, fem una valoració inicial de l'alumne i, si encaixa, reservem la seua plaça per a començar com més prompte millor.",
      },
    ],
  },
  reserva: {
    badge: "Reserva la teua plaça",
    modes: { reserva: "Reserva la teua plaça", contacto: "Contacta amb nosaltres" },
    title: "Comença a Estells.",
    subtitle:
      "Deixa'ns les teues dades i et responem en menys de 24 hores. També intensius d'estiu i classes especials.",
    titleContacto: "Parlem.",
    subtitleContacto:
      "Tens un dubte o vols més informació? Escriu-nos i et responem en menys de 24 hores.",
    submitContacto: "Enviar missatge",
    mailSubjectContacto: "Consulta · Estells",
    labels: {
      name: "Nom complet",
      phone: "Telèfon",
      email: "Email",
      age: "Edat / curs de l'alumne",
      subject: "Assignatura o idioma",
      level: "Nivell",
      start: "Data d'inici preferida",
      message: "Missatge",
      messagePlaceholder: "Conta'ns què necessites (opcional)",
      optional: "opcional",
    },
    levels: ["Primària", "ESO", "Batxillerat", "Idiomes", "Altre"],
    submit: "Sol·licitar reserva",
    sending: "Enviant…",
    success: "Fet! Obrim el teu correu per a enviar la sol·licitud.",
    error: "Revisa els camps marcats.",
    whatsapp: "Escriu-nos per WhatsApp",
    privacy: "En enviar acceptes que et contactem sobre la teua sol·licitud.",
    mailSubject: "Reserva de plaça · Estells",
  },
  footer: {
    tagline:
      "On l'aprenentatge cobra vida. Suport educatiu pròxim i personalitzat a Alginet.",
    contactLabel: "Contacte",
    hoursLabel: "Horari",
    weekdays: "Dilluns – Divendres",
    weekend: "Dissabte – Diumenge",
    closed: "Tancat",
    cta: "Reserva la teua plaça",
    rights: "© 2026 Estells Centre d'Estudis. Tots els drets reservats.",
    region: "Alginet · València",
  },
  a11y: {
    skip: "Salta al contingut",
    openMenu: "Obrir menú",
    closeMenu: "Tancar menú",
    langLabel: "Canviar idioma",
  },
};

export const dictionaries: Record<Lang, Dict> = { es, va };
