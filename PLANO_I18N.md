# Plano de Internacionalização (i18n) — Portfólio

> PT-BR (padrão) · EN · ES, com troca por 3 bandeiras no topo da página.

## 1. Estado atual (análise)

- **Stack**: Astro 4 estático (`output: 'static'`), Three.js + GSAP (ScrollTrigger/SplitText), CSS puro com variáveis. Sem framework de UI, sem JS de estado.
- **Deploy**: GitHub Pages (`site: https://dev-zanatta.github.io`, `outDir: './docs'` commitado no repo).
- **Estrutura**: página única `src/pages/index.astro` compondo 5 seções:
  - `HeroSection.astro` — contém também o `<nav>`, o canvas Three.js e todo o script de animação.
  - `AboutSection.astro`, `StackSection.astro`, `ProjectsSection.astro`, `ContactSection.astro`.
- **Textos**: 100% hardcoded em PT dentro dos componentes + `src/data/projects.js` (6 projetos com `tagline`, `description`, `type`) + categorias em `StackSection` + meta title/description no `Layout.astro`.

## 2. Estratégia recomendada: i18n nativo do Astro (rotas estáticas)

Gerar **3 versões pré-renderizadas** do site: `/` (pt), `/en/`, `/es/`.

**Por quê (e não troca de texto via JS client-side):**
- Portfólio = SEO importa. Cada idioma vira uma página indexável com `hreflang`, title e description próprios.
- Zero JS extra no bundle; o Astro gera tudo em build (`docs/index.html`, `docs/en/index.html`, `docs/es/index.html`).
- A troca de idioma é um link normal — o hero re-anima na chegada, o que até valoriza a página.
- É o mecanismo oficial do Astro 4 (`i18n` no config), sem dependência nova.

## 3. Etapas de implementação

### Etapa 1 — Configuração
`astro.config.mjs`:
```js
i18n: {
  defaultLocale: 'pt',
  locales: ['pt', 'en', 'es'],
  routing: { prefixDefaultLocale: false },
}
```
PT continua em `/` (URLs atuais não quebram).

### Etapa 2 — Camada de traduções (`src/i18n/`)
- `src/i18n/ui.js` — dicionários `pt`, `en`, `es` com chaves por seção:
  - `meta.title`, `meta.description`
  - `nav.about`, `nav.stack`, `nav.projects`, `nav.contact`
  - `hero.eyebrow`, `hero.subtitle` (com marcação para o `<span class="accent">`), `hero.ctaProjects`, `hero.scroll`
  - `about.label`, `about.heading`, `about.p1`, `about.p2`, `about.statYears`, `about.statProjects`, `about.statPlatform`, `about.highlight`
  - `stack.label`, `stack.heading`, `stack.catFrontend`, `stack.catBackend`, `stack.catDb`, `stack.catPlatforms`
  - `projects.label`, `projects.heading`, `projects.view`, `projects.wip`
  - `contact.label`, `contact.heading`, `contact.body`, `footer.copy`, `footer.built`
- `src/i18n/utils.js` — helpers `useTranslations(locale)` e `localizePath(locale, path)`.

### Etapa 3 — Dados localizados
- `src/data/projects.js` → campos traduzíveis por locale. Formato sugerido: manter um array único e trocar `tagline`, `description`, `type` por objetos `{ pt, en, es }` (nome, num, stack e link são universais). O componente resolve com o locale ativo.
- Mesmo tratamento para as categorias do `StackSection` (ex.: "Banco & Cloud" → "Database & Cloud" / "Base de datos & Cloud"). Os itens (Vue.js, Laravel...) não traduzem.

### Etapa 4 — Refatorar componentes
- Cada seção lê `Astro.currentLocale` (ou recebe `locale` via prop) e usa `t('chave')` no lugar dos textos fixos.
- **Manter os `id`s das seções como estão** (`#sobre`, `#stack`, `#projetos`, `#contato`) em todos os idiomas — os scripts (ScrollTrigger, IntersectionObserver, âncoras do nav) continuam funcionando sem nenhuma alteração. Só os *labels* do nav traduzem.
- O script Three.js/GSAP do Hero não tem texto (exceto o indicador "scroll") — permanece intacto e compartilhado.
- `hero-name` (Gustavo Felipe Zanatta) não traduz — SplitText segue igual.

### Etapa 5 — Páginas por idioma
- Extrair o conteúdo de `index.astro` para `src/components/PortfolioPage.astro` (recebe/deduz o locale).
- `src/pages/index.astro` (pt), `src/pages/en/index.astro`, `src/pages/es/index.astro` — cada uma só renderiza `<PortfolioPage />` com o Layout passando title/description traduzidos.

### Etapa 6 — Seletor de idiomas com bandeiras
- Novo componente `LanguageSwitcher.astro`, posicionado no `<nav>` (entre os links e a borda direita).
- **Bandeiras em SVG inline** (🇧🇷 🇺🇸 🇪🇸 como emoji **não renderizam no Windows** — Chrome/Edge mostram apenas "BR US ES"). Três SVGs pequenos (~20×14px), cantos levemente arredondados, seguindo a estética da página (opacidade reduzida no inativo, borda `var(--accent)` ou opacidade cheia no ativo).
- Cada bandeira é um `<a>` para a rota equivalente (`/`, `/en/`, `/es/`) com `aria-label` ("Português", "English", "Español") e `title`.
- **Mobile**: hoje `.nav-links` some abaixo de 768px — as bandeiras devem permanecer visíveis (ficam fora do `ul.nav-links`).
- O hover do cursor-follower já cobre `a` genérico, funciona automaticamente.

### Etapa 7 — SEO
No `Layout.astro`:
- `<html lang>` dinâmico: `pt-BR` / `en` / `es`.
- `<link rel="alternate" hreflang="...">` para os 3 idiomas + `x-default` apontando para `/`.
- `<link rel="canonical">` por página.
- `og:locale` + `og:title`/`og:description` traduzidos (bônus).

### Etapa 8 — UX (opcional, recomendado)
- Script inline mínimo (~10 linhas) no `<head>`: na **primeira visita** a `/` sem preferência salva, se `navigator.language` começar com `en` ou `es`, redireciona para `/en/` ou `/es/`. Ao clicar numa bandeira, salva a escolha em `localStorage` e nunca mais redireciona automaticamente.

### Etapa 9 — Build, validação e deploy
1. `npm run build` → conferir `docs/`, `docs/en/`, `docs/es/` gerados.
2. Validar: âncoras do nav nos 3 idiomas, animações do hero, layout dos headings (EN/ES têm comprimentos diferentes — "Vamos trabalhar juntos?" → "Let's work together?" / "¿Trabajamos juntos?"; os `clamp()` existentes absorvem bem, mas conferir quebras de linha `<br />` manuais dos headings por idioma — as traduções devem indicar onde quebra).
3. `.nojekyll` já existe em `public/` — ok para as subpastas no Pages.
4. Commit descritivo (sem assinatura) e push.

## 4. Pontos de atenção

| Ponto | Tratamento |
|---|---|
| Emoji de bandeira no Windows | SVG inline obrigatório |
| Headings com `<br />` manual | Dicionário guarda as linhas separadas (array ou marcador), cada idioma controla suas quebras |
| `hero.subtitle` tem `<span class="accent">` interno | Usar `set:html` com a marcação no dicionário, ou dividir a chave em 3 partes |
| IDs de âncora | Não traduzir — mantém scripts e URLs de seção estáveis |
| `docs/` commitado | Build gera as novas subpastas; nada muda no fluxo de deploy |
| Textos esquecidos | Varredura final por literais PT nos `.astro` antes do build |

## 5. Ordem de execução e esforço

1. Config + dicionários + utils (base) — ~30 min
2. Dados localizados (projects + stack) — ~40 min
3. Refatorar 5 componentes + extrair PortfolioPage — ~1h
4. Páginas `/en` e `/es` + Layout SEO — ~30 min
5. LanguageSwitcher com bandeiras SVG — ~30 min
6. Auto-detecção + persistência (opcional) — ~20 min
7. Build, validação nos 3 idiomas, deploy — ~30 min

**Total estimado: ~3h30–4h** em uma única sessão de implementação.
