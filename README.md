# acaf-site

Site público da **Movly** (landing institucional), baseado no layout exportado do Claude Artifacts.

## Stack

- Vite + React 19 + TypeScript
- Tipografia e branding alinhados ao portal corporativo (`acaf-corporate`)
- Porta de desenvolvimento: **5179**

## Começar

```bash
cd acaf-site
npm install
npm run dev
```

Abra [http://127.0.0.1:5179](http://127.0.0.1:5179).

### Páginas legais (App Store / Play Console)

| URL | Uso |
|-----|-----|
| `/termos-de-uso` | Termos de uso (atalho `/termos`) |
| `/politica-de-privacidade` | Política de privacidade (atalho `/privacidade`) |

Em produção, configure o servidor estático com fallback `index.html` para essas rotas (SPA).

### Variáveis de ambiente

Copie `.env.example` para `.env` e ajuste os links dos portais:

| Variável | Uso |
|----------|-----|
| `VITE_CORPORATE_URL` | Portal da empresa (login/cadastro) |
| `VITE_PARTNER_URL` | Portal da academia |
| `VITE_CONTACT_EMAIL` | Destino do formulário de contato (`mailto:`) |
| `VITE_API_URL` | URL da API (produção ou dev sem proxy no mesmo host) |
| `VITE_API_PROXY_TARGET` | Backend local no `npm run dev` (proxy `/api` e `/shared`) |

### Conexão com a API

O site usa o **mesmo padrão** dos portais (`acaf-corporate`, etc.):

| Arquivo | Papel |
|---------|--------|
| `src/config.ts` | `apiUrl()` / `readApiUrl()` |
| `src/api/http.ts` | `fetchApi`, `getJson`, `postJson`, `ApiError` |
| `src/api/index.ts` | reexport para novos módulos (`contact`, `leads`, …) |
| `public/api-config.js` | `window.__CONNECT_API_URL__` em produção |

**Dev:** com a API em `8787`, requests relativos (`/shared/...`, `/api/...`) passam pelo proxy do Vite.

**Produção:** nginx (recomendado) encaminha `/api` e `/shared` para o backend — `apiUrl` fica relativo. Alternativa: preencher `api-config.js` ou `VITE_API_URL`.

Novos recursos do site: criar `src/api/<feature>.ts` usando `getJson` / `postJson` e tipar em `src/types/`.

## Estrutura

- `src/sections/` — seções da home (hero, empresas, simulador, FAQ, etc.)
- `src/styles/` — tokens de marca + CSS do layout
- `public/branding`, `public/fonts` — mesmos assets do corporate
- `reference/` — export original do Claude e HTML extraído do template

## Reimportar layout do Claude

Quando receber um novo `Site Movly.html`:

```bash
npm run extract:claude -- "/caminho/Site Movly.html"
```

O HTML limpo vai para `reference/claude-layout-source.html` para comparação durante refactors.

## Build

```bash
npm run build
npm run preview
```
