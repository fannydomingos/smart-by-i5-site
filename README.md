# SMART by i5 — site do empreendimento

Landing page single-page de alto padrão para o **SMART by i5** (Águas Claras/DF),
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
14. **CTA final + Footer** — Sinal ZERO e conversão para WhatsApp

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
- Sem overflow horizontal em nenhum breakpoint
- Imagens otimizadas pelo `next/image` (AVIF/WebP, lazy loading, `sizes`)
- Fontes locais com `display: swap`
- JSON-LD `Residence` + Open Graph + sitemap + robots.txt

---

## ⚖️ Observação sobre a marca

O material de origem (book e renders) está assinado como **i5 STAY**. Como a
definição foi usar **SMART by i5**, os letreiros "i5 STAY" foram removidos dos
recortes de imagem. Alguns renders ainda mostram a sinalização **i5** na
fachada do prédio — é a marca do grupo, então foi mantida. Se o cliente quiser
o letreiro "SMART" na fachada, será necessário refazer os renders.
