# SMARTER by i5 stay — site do empreendimento

Landing page single-page de alto padrão para o **SMARTER by i5 stay** (Águas Claras/DF),
construída com Next.js 16 (App Router), TypeScript, Tailwind CSS v4,
Framer Motion, GSAP ScrollTrigger e Lenis.

---

## ⚡ O que precisa ser ajustado antes de publicar

Tudo o que é "dado do cliente" está centralizado em **`src/lib/site.ts`**.

| Campo | Onde aparece | Status |
|---|---|---|
| `whatsapp` | Todos os CTAs, botão flutuante, header, footer | ⚠️ **placeholder `5561999999999`** — trocar pelo número real |
| `whatsappMessage` | Mensagem pré-preenchida da conversa | ok, revisar texto |
| `phone` | Footer (central de vendas) | ⚠️ veio como `3333-33333` no material |
| `email` | Footer | `atendimento@i5imob.com.br` |
| `addressProject` | Localização, footer | QS 5, Rua 310, Lote 12 |
| `addressSales` | Localização, footer | Rua Macaúba, 15 |
| `social.*` | Footer | ⚠️ URLs genéricas — trocar pelos perfis reais |
| `url` | SEO / Open Graph / sitemap | ⚠️ trocar pelo domínio final |

O formato do WhatsApp é internacional, só dígitos: `55` + DDD + número.
Exemplo: `5561998887766`.

---

## 🚀 Rodando o projeto

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # build de produção
npm run start   # servir o build
```

### Deploy na Vercel

1. Suba o repositório no GitHub/GitLab.
2. Em vercel.com → *New Project* → importe o repositório.
3. Nenhuma variável de ambiente é necessária. Build command e output são
   detectados automaticamente.
4. Aponte o domínio e atualize `site.url` em `src/lib/site.ts`.

O projeto também roda em qualquer host Node (`npm run build && npm run start`).

---

## 🎨 Design system

Os tokens ficam em `src/app/globals.css`, no bloco `@theme`:

- **Fundo:** `ink-950` → `ink-500` (azul-petróleo quase preto, extraído do book)
- **Destaque:** `gold-200` → `gold-600` (dourado da marca)
- **Texto:** `bone` (títulos), `mist` (corpo), `muted` (apoio)
- **Tipografia:** Outfit (display) + Inter (corpo), **auto-hospedadas** em
  `src/fonts/` — sem chamada ao Google Fonts (mais rápido e aderente à LGPD)

Utilitários próprios: `.text-gold-grad`, `.rule`, `.glass`, `.card-hair`,
`.noise`, `.shadow-lift`.

---

## 🧩 Estrutura

```
src/
├─ app/
│  ├─ layout.tsx        metadata, Open Graph, fontes
│  ├─ page.tsx          composição das seções + JSON-LD
│  ├─ globals.css       design system (Tailwind v4 @theme)
│  └─ sitemap.ts
├─ lib/site.ts          ← dados do cliente, WhatsApp, navegação
├─ fonts/               fontes auto-hospedadas (.woff2)
└─ components/
   ├─ SmoothScroll.tsx  Lenis + sincronização com GSAP ScrollTrigger
   ├─ Preloader.tsx     abertura da marca com barra de progresso
   ├─ Cursor.tsx        cursor customizado com rótulos (desktop)
   ├─ Header.tsx        header adaptativo + menu mobile + barra de progresso
   ├─ WhatsAppFab.tsx   botão flutuante
   ├─ ui/               Reveal, SplitWords, Stagger, Icons, Logo
   └─ sections/         14 seções da página
```

### Seções, na ordem

1. **Hero** — parallax na fachada, título revelado palavra a palavra, marquee
2. **Manifesto** — texto que ganha opacidade conforme o scroll
3. **Bairro** — Águas Claras, 4 pilares, aérea com parallax
4. **Pilares** — *scroll horizontal com pin* (GSAP) nos 3 argumentos de venda
5. **Planta** — **planta interativa com 6 hotspots** clicáveis
6. **Serviços** — acordeão com as dores do dia a dia (pay per use)
7. **Lazer** — rooftop full-bleed com parallax + 3 diferenciais
8. **Inteligência** — tecnologia, delivery/ferramentaria, "a inteligência muda tudo"
9. **Pavimentos** — **tabs que dão zoom** em cada pavimento da isométrica
10. **Design** — arquitetura e os 4 detalhes de fachada
11. **Investir ou morar** — painéis que expandem no hover
12. **Grupo i5** — contadores animados + explorador das 5 empresas
13. **Localização** — endereço, acessos, mapa
14. **CTA final + Footer** — Sinal facilitado e conversão para WhatsApp

---

## 🖼️ Imagens

Ficam em `public/img/`. Os renders vieram do book institucional e dos arquivos
enviados pelo cliente; os recortes técnicos (planta, pavimentos, aérea) foram
extraídos em resolução nativa do PDF.

**Recomendação:** substituir `planta.jpg`, `pavimentos.jpg`, `aguas-claras.jpg`,
`hotel-i5.jpg`, `skyline.jpg`, `lifestyle.jpg` e `rooftop-woman.jpg` pelos
arquivos originais em alta quando o cliente disponibilizar — são recortes de
páginas do PDF (≈145 dpi) e ganham bastante em telas grandes.

Se trocar a **planta**, revise as coordenadas dos hotspots em
`src/components/sections/Planta.tsx` (campos `x` e `y`, em % da imagem).
Se trocar a **isométrica dos pavimentos**, revise `scale`/`ty` em
`src/components/sections/Pavimentos.tsx`.

---

## ♿ Acessibilidade e performance

- Respeita `prefers-reduced-motion`: desliga smooth scroll, preloader,
  cursor customizado e scroll horizontal com pin
- **Responsivo e auditado em 11 larguras:** 320, 360, 390, 430, 768, 820,
  1024, 1280, 1440, 1920 e 2560px — zero overflow horizontal, zero erro de
  console, alvos de toque ≥36px e nenhum texto abaixo de 9px
- Breakpoints principais: menu completo a partir de 1280px (abaixo disso,
  menu hamburguer em tela cheia); grids passam a 1 coluna abaixo de 1024px;
  o scroll horizontal com pin vira empilhamento vertical abaixo de 1024px
- Imagens otimizadas pelo `next/image` (AVIF/WebP, lazy loading, `sizes`)
- Fontes locais com `display: swap`
- JSON-LD `Residence` + Open Graph + sitemap + robots.txt

---

## ⚖️ Observações sobre a marca e o texto

Nome oficial definido pelo cliente: **SMARTER by i5 stay**.

Termos proibidos, já removidos de todo o projeto (verificar antes de qualquer
novo texto):

- **"studio"** — usar sempre *apartamento* / *apartamentos inteligentes*
- **"Sinal ZERO"** — a condição é **Sinal facilitado**
- **"sem intermediários"** — a venda tem intermediário
- **"churrasqueira a gás"** — apenas *churrasqueira*
- **"compacto"** na razão 01 dos três pilares (o termo segue permitido no
  título da seção da planta e no claim da i5 incorp, que é do cliente)

Legendas obrigatórias sob as imagens (componente `ImgNote` em
`src/components/ui/Reveal.tsx`): **"Apartamento entregue sem mobília"** e
**"Imagem ilustrativa"**.

Os letreiros "i5 STAY" foram removidos dos recortes de imagem. Alguns renders
ainda mostram a sinalização **i5** na fachada — é a marca do grupo, então foi
mantida. Se o cliente quiser o letreiro "SMARTER" na fachada, os renders
precisam ser refeitos.
