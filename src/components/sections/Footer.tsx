"use client";

import { Logo } from "../ui/Logo";
import { nav, site, waHref } from "@/lib/site";
import {
  IconWhatsApp,
  IconInstagram,
  IconFacebook,
  IconLinkedin,
} from "../ui/Icons";
import { scrollToSection } from "../SmoothScroll";

const empresas = [
  "i5 incorp",
  "i5 imob",
  "i5 hotel",
  "i5 stay",
  "i5 cowork",
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.07] bg-ink-950">
      <div className="noise absolute inset-0" />

      <div className="relative mx-auto max-w-[1400px] px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr] lg:gap-16">
          {/* Brand */}
          <div>
            <Logo />
            <p className="mt-6 max-w-xs text-[0.82rem] font-light leading-relaxed text-muted">
              Inteligência para viver. Conforto para ficar. Apartamentos
              inteligentes em Águas Claras, com gestão i5 stay.
            </p>

            <div className="mt-7 flex items-center gap-3">
              {[
                { href: site.social.instagram, Icon: IconInstagram, label: "Instagram" },
                { href: site.social.facebook, Icon: IconFacebook, label: "Facebook" },
                { href: site.social.linkedin, Icon: IconLinkedin, label: "LinkedIn" },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-muted transition-all duration-500 hover:border-gold-400/50 hover:text-gold-200"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <h3 className="text-[0.6rem] font-light uppercase tracking-[0.3em] text-gold-300">
              Navegue
            </h3>
            <ul className="mt-4 space-y-1">
              {nav.map((n) => (
                <li key={n.href}>
                  <button
                    onClick={() => scrollToSection(n.href)}
                    className="group flex min-h-11 items-center gap-2.5 py-1 text-[0.84rem] font-light text-muted transition-colors duration-400 hover:text-bone"
                  >
                    <span className="h-px w-0 bg-gold-400 transition-all duration-500 group-hover:w-4" />
                    {n.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-[0.6rem] font-light uppercase tracking-[0.3em] text-gold-300">
              Contato
            </h3>

            <div className="mt-6 space-y-4 text-[0.84rem] font-light text-muted">
              <div>
                <div className="text-[0.6rem] uppercase tracking-[0.2em] text-muted/70">
                  Central de vendas 24h
                </div>
                <div className="mt-1 text-mist">{site.phone}</div>
              </div>
              <div>
                <div className="text-[0.6rem] uppercase tracking-[0.2em] text-muted/70">
                  E-mail
                </div>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-1 inline-flex min-h-11 items-center text-mist transition-colors hover:text-gold-200"
                >
                  {site.email}
                </a>
              </div>
              <div>
                <div className="text-[0.6rem] uppercase tracking-[0.2em] text-muted/70">
                  Endereço
                </div>
                <div className="mt-1 leading-relaxed text-mist">
                  {site.addressSales}
                </div>
              </div>
            </div>

            <a
              href={waHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-7 inline-flex items-center gap-2.5 rounded-full border border-gold-400/40 px-5 py-3 text-[0.66rem] font-light uppercase tracking-[0.18em] text-gold-200 transition-all duration-500 hover:border-gold-300 hover:bg-gold-400/10"
            >
              <IconWhatsApp className="h-4 w-4" />
              Falar no WhatsApp
            </a>
          </div>
        </div>

        {/* Empresas do grupo */}
        <div className="mt-14 border-t border-white/[0.07] pt-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <span className="text-[0.6rem] font-light uppercase tracking-[0.3em] text-muted">
              Empresas do grupo
            </span>
            <div className="flex flex-wrap items-center gap-x-7 gap-y-3">
              {empresas.map((e) => (
                <span
                  key={e}
                  className="font-display text-[0.86rem] font-light tracking-wide text-mist/70 transition-colors duration-400 hover:text-gold-200"
                >
                  {e}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Legal */}
        <div className="mt-10 flex flex-col gap-3 border-t border-white/[0.05] pt-8 text-[0.68rem] font-light text-muted/70 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {year} {site.brand}. Todos os direitos reservados.
          </span>
          <span className="max-w-xl leading-relaxed">
            Imagens meramente ilustrativas. Apartamento entregue sem mobília.
            Projeto sujeito a alterações conforme aprovação dos órgãos
            competentes. Memorial descritivo prevalece sobre o material
            publicitário.
          </span>
        </div>
      </div>
    </footer>
  );
}
