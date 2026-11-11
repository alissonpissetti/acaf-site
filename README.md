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

### Variáveis de ambiente

Copie `.env.example` para `.env` e ajuste os links dos portais:

| Variável | Uso |
|----------|-----|
| `VITE_CORPORATE_URL` | Portal da empresa (login/cadastro) |
| `VITE_PARTNER_URL` | Portal da academia |
| `VITE_CONTACT_EMAIL` | Destino do formulário de contato (`mailto:`) |

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
