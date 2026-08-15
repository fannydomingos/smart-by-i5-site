import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

const base = (p: P) => ({
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.25,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  ...p,
});

/* ---------------- Bairro / lifestyle ---------------- */

export const IconNature = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 21v-6" />
    <path d="M12 15c-4 0-6.5-2.4-6.5-5.6C5.5 6 8.4 3 12 3s6.5 3 6.5 6.4C18.5 12.6 16 15 12 15Z" />
    <path d="M9.4 9.6 12 12l2.6-2.4" />
  </svg>
);

export const IconUrban = (p: P) => (
  <svg {...base(p)}>
    <path d="M3 21h18" />
    <path d="M5 21V8l5-3v16" />
    <path d="M10 21V11l5 2v8" />
    <path d="M15 21v-6l4 2v4" />
    <path d="M7.4 10.5h.6M7.4 13.5h.6M7.4 16.5h.6M12.4 15h.6M12.4 18h.6" />
  </svg>
);

export const IconMobility = (p: P) => (
  <svg {...base(p)}>
    <rect x="4" y="3" width="16" height="13" rx="3" />
    <path d="M4 10h16" />
    <path d="M7.5 19.5 6 22M16.5 19.5 18 22" />
    <path d="M8 13.4h.5M15.5 13.4h.5" />
    <path d="M6 16h12" />
  </svg>
);

export const IconConvenience = (p: P) => (
  <svg {...base(p)}>
    <path d="M4.5 8h15l-1.2 12.2a1 1 0 0 1-1 .8H6.7a1 1 0 0 1-1-.8L4.5 8Z" />
    <path d="M9 8V6a3 3 0 0 1 6 0v2" />
  </svg>
);

/* ---------------- Lazer ---------------- */

export const IconGrill = (p: P) => (
  <svg {...base(p)}>
    <path d="M4 6h16l-2.2 7.4a4 4 0 0 1-3.8 2.8h-4A4 4 0 0 1 6.2 13.4L4 6Z" />
    <path d="M9.6 16.2 8 22M14.4 16.2 16 22" />
    <path d="M9 22h6" />
  </svg>
);

export const IconSpa = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 20c-4.4 0-8-2.6-8-2.6 1.9-2.3 4.8-3.4 8-3.4s6.1 1.1 8 3.4c0 0-3.6 2.6-8 2.6Z" />
    <path d="M12 14c0-4 1.6-7.2 4.4-9C16 8.6 14.6 11.6 12 14Z" />
    <path d="M12 14C12 10 10.4 6.8 7.6 5 8 8.6 9.4 11.6 12 14Z" />
  </svg>
);

export const IconView = (p: P) => (
  <svg {...base(p)}>
    <circle cx="6.5" cy="15" r="3.5" />
    <circle cx="17.5" cy="15" r="3.5" />
    <path d="M10 15h4" />
    <path d="M5.6 11.5 7 5h3l-.6 6M18.4 11.5 17 5h-3l.6 6" />
  </svg>
);

/* ---------------- Serviços / inteligência ---------------- */

export const IconBox = (p: P) => (
  <svg {...base(p)}>
    <path d="m12 3 8 4.2v9.6L12 21l-8-4.2V7.2L12 3Z" />
    <path d="m4 7.2 8 4.2 8-4.2M12 11.4V21" />
  </svg>
);

export const IconPhone = (p: P) => (
  <svg {...base(p)}>
    <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
    <path d="M10.8 5.4h2.4M11 18.8h2" />
  </svg>
);

export const IconShield = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 3 4.8 5.8v5.4c0 4.4 3 8.3 7.2 9.8 4.2-1.5 7.2-5.4 7.2-9.8V5.8L12 3Z" />
    <path d="m9.2 11.8 2 2 3.6-3.8" />
  </svg>
);

export const IconWifi = (p: P) => (
  <svg {...base(p)}>
    <path d="M2.5 9.2a14 14 0 0 1 19 0" />
    <path d="M5.8 12.6a9.4 9.4 0 0 1 12.4 0" />
    <path d="M9 16a4.8 4.8 0 0 1 6 0" />
    <circle cx="12" cy="19.4" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);

export const IconLounger = (p: P) => (
  <svg {...base(p)}>
    <circle cx="17" cy="5.5" r="2.5" />
    <path d="M2 20h20" />
    <path d="m3.5 17 8-2.4 8.5-2.6" />
    <path d="M4.2 13.6 11 11.6" />
    <path d="M5 20v-2.6M19.6 20v-3" />
  </svg>
);

export const IconGear = (p: P) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="3.1" />
    <path d="M12 2.6v2.2M12 19.2v2.2M21.4 12h-2.2M4.8 12H2.6M18.6 5.4l-1.6 1.6M7 17l-1.6 1.6M18.6 18.6 17 17M7 7 5.4 5.4" />
  </svg>
);

export const IconBulb = (p: P) => (
  <svg {...base(p)}>
    <path d="M9.4 17.5a6 6 0 1 1 5.2 0" />
    <path d="M9.6 17.5h4.8v1.9a2.4 2.4 0 0 1-4.8 0v-1.9Z" />
    <path d="M10.8 21.6h2.4" />
  </svg>
);

export const IconAutomation = (p: P) => (
  <svg {...base(p)}>
    <path d="M4 21V6.5L11 3v18" />
    <path d="M11 9.5h9V21" />
    <path d="M6.7 8.6h1.6M6.7 12.2h1.6M6.7 15.8h1.6M14 13h1.6M14 16.6h1.6" />
    <path d="M3 21h18" />
  </svg>
);

export const IconPin = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11Z" />
    <circle cx="12" cy="10" r="2.6" />
  </svg>
);

export const IconPlan = (p: P) => (
  <svg {...base(p)}>
    <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="1.6" />
    <path d="M3.2 10.4h6.4V3.2M9.6 10.4v10.4M9.6 15.4h11.2" />
  </svg>
);

export const IconConcierge = (p: P) => (
  <svg {...base(p)}>
    <path d="M3 18h18" />
    <path d="M4.6 18a7.4 7.4 0 0 1 14.8 0" />
    <path d="M12 7.4V5.2" />
    <circle cx="12" cy="4" r="1.2" />
  </svg>
);

export const IconBroom = (p: P) => (
  <svg {...base(p)}>
    <path d="M14.6 3.4 20 8.8" />
    <path d="m17.6 6.2-8 8" />
    <path d="M9.8 14.2 4 20l3.2 1.4L11 17.6l2.6-1.2-3.8-2.2Z" />
    <path d="M7.4 16.6 9 20" />
  </svg>
);

/* ---------------- Investimento ---------------- */

export const IconChart = (p: P) => (
  <svg {...base(p)}>
    <path d="M3.6 20.4h16.8" />
    <path d="M6.6 20.4v-6M11 20.4V8.8M15.4 20.4v-8.6M19.8 20.4V5.2" />
  </svg>
);

export const IconKey = (p: P) => (
  <svg {...base(p)}>
    <circle cx="8" cy="8" r="4.4" />
    <path d="m11.2 11.2 8.4 8.4" />
    <path d="m16.4 16.4 2-2M18.6 18.6l1.8-1.8" />
  </svg>
);

export const IconHome = (p: P) => (
  <svg {...base(p)}>
    <path d="m3.4 10.6 8.6-7 8.6 7" />
    <path d="M5.6 9v11.4h12.8V9" />
    <path d="M10 20.4v-5.6h4v5.6" />
  </svg>
);

export const IconUser = (p: P) => (
  <svg {...base(p)}>
    <circle cx="12" cy="8" r="3.8" />
    <path d="M4.6 20.4a7.4 7.4 0 0 1 14.8 0" />
  </svg>
);

export const IconTrend = (p: P) => (
  <svg {...base(p)}>
    <path d="M3.4 16.6 9 11l3.6 3.6L20.6 6.6" />
    <path d="M15.6 6.6h5v5" />
  </svg>
);

export const IconTrophy = (p: P) => (
  <svg {...base(p)}>
    <path d="M7.4 3.6h9.2v5a4.6 4.6 0 1 1-9.2 0v-5Z" />
    <path d="M7.4 5.4H4.6v1.4a3.2 3.2 0 0 0 2.8 3.2M16.6 5.4h2.8v1.4a3.2 3.2 0 0 1-2.8 3.2" />
    <path d="M12 13.2v3.6M8.6 20.4h6.8l-.8-3.6H9.4l-.8 3.6Z" />
  </svg>
);

export const IconAward = (p: P) => (
  <svg {...base(p)}>
    <circle cx="12" cy="9" r="5.4" />
    <path d="m8.6 13.6-1.4 7 4.8-2.4 4.8 2.4-1.4-7" />
  </svg>
);

export const IconSofa = (p: P) => (
  <svg {...base(p)}>
    <path d="M4.4 11V8.4a2.4 2.4 0 0 1 2.4-2.4h10.4a2.4 2.4 0 0 1 2.4 2.4V11" />
    <path d="M3 13.4a2 2 0 0 1 4 0V16h10v-2.6a2 2 0 0 1 4 0V19H3v-5.6Z" />
    <path d="M5.6 19v1.6M18.4 19v1.6" />
  </svg>
);

/* ---------------- Planta hotspots ---------------- */

export const IconBed = (p: P) => (
  <svg {...base(p)}>
    <path d="M3 19v-9M3 13h18v6M21 19v-4.4a2.6 2.6 0 0 0-2.6-2.6H10v-2.6A1.4 1.4 0 0 1 11.4 6h6.2" />
    <circle cx="6.6" cy="10.4" r="1.8" />
  </svg>
);

export const IconCabinet = (p: P) => (
  <svg {...base(p)}>
    <rect x="4" y="3" width="16" height="18" rx="1.4" />
    <path d="M12 3v18M4 12h16" />
    <path d="M10.2 7.4h.6M13.2 7.4h.6M10.2 16h.6M13.2 16h.6" />
  </svg>
);

export const IconDesk = (p: P) => (
  <svg {...base(p)}>
    <rect x="5" y="4.6" width="14" height="9" rx="1.2" />
    <path d="M9.6 17.4h4.8M12 13.6v3.8" />
    <path d="M7 20.4h10" />
  </svg>
);

export const IconKitchen = (p: P) => (
  <svg {...base(p)}>
    <rect x="3.4" y="4.6" width="17.2" height="14.8" rx="1.6" />
    <path d="M3.4 9.4h17.2" />
    <circle cx="8.4" cy="13.4" r="1.6" />
    <circle cx="15.6" cy="13.4" r="1.6" />
    <path d="M7 7h1.6M11.2 7h1.6" />
  </svg>
);

export const IconTable = (p: P) => (
  <svg {...base(p)}>
    <path d="M2.6 9.4h18.8" />
    <path d="M4.6 9.4 6 20M19.4 9.4 18 20" />
    <path d="M12 9.4V4.6" />
    <path d="M8.6 4.6h6.8" />
  </svg>
);

export const IconDoor = (p: P) => (
  <svg {...base(p)}>
    <path d="M6 21V4.4a1.4 1.4 0 0 1 1.7-1.37l8 1.6A1.4 1.4 0 0 1 17 6v12a1.4 1.4 0 0 1-1.3 1.37l-8 .6A1.4 1.4 0 0 1 6 18.6" />
    <path d="M4 21h16" />
    <circle cx="14" cy="12" r="0.8" fill="currentColor" stroke="none" />
  </svg>
);

/* ---------------- UI ---------------- */

export const IconWhatsApp = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.25-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47s1.06 2.86 1.21 3.06c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35Z" />
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.86 9.86 0 0 0 4.79 1.22h.01c5.46 0 9.9-4.44 9.9-9.9C21.95 6.45 17.5 2 12.04 2Zm0 18.1a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.17 8.17 0 0 1-1.25-4.33c0-4.53 3.7-8.22 8.24-8.22 2.2 0 4.27.86 5.82 2.42a8.16 8.16 0 0 1 2.41 5.81c0 4.54-3.69 8.22-8.24 8.22Z" />
  </svg>
);

export const IconInstagram = (p: P) => (
  <svg {...base(p)}>
    <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
  </svg>
);

export const IconFacebook = (p: P) => (
  <svg {...base(p)}>
    <path d="M14.6 21.4v-8h2.7l.4-3.1h-3.1V8.3c0-.9.25-1.5 1.55-1.5h1.65V4a22 22 0 0 0-2.4-.12c-2.38 0-4 1.45-4 4.11v2.3H8.7v3.1h2.7v8" />
  </svg>
);

export const IconLinkedin = (p: P) => (
  <svg {...base(p)}>
    <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="3" />
    <path d="M7.4 10.6v6.2M7.4 7.6v.1" />
    <path d="M11.4 16.8v-6.2M11.4 13.2a2.6 2.6 0 0 1 5.2 0v3.6" />
  </svg>
);

export const IconArrow = (p: P) => (
  <svg {...base(p)}>
    <path d="M4.5 12h15M13.5 6l6 6-6 6" />
  </svg>
);

export const IconArrowDown = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 4.5v15M6 13.5l6 6 6-6" />
  </svg>
);

export const IconPlus = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export const IconClose = (p: P) => (
  <svg {...base(p)}>
    <path d="m6 6 12 12M18 6 6 18" />
  </svg>
);

export const IconMenu = (p: P) => (
  <svg {...base(p)}>
    <path d="M3.5 7.5h17M3.5 12h17M3.5 16.5h11" />
  </svg>
);

export const IconQuestion = (p: P) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M9.6 9.4a2.5 2.5 0 0 1 4.85.8c0 1.7-2.45 2.05-2.45 3.6" />
    <circle cx="12" cy="17" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);

export const IconCheck = (p: P) => (
  <svg {...base(p)}>
    <path d="m4.5 12.5 5 5 10-11" />
  </svg>
);
