/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CORPORATE_URL?: string;
  readonly VITE_PARTNER_URL?: string;
  readonly VITE_CONTACT_EMAIL?: string;
  readonly VITE_API_URL?: string;
  readonly VITE_API_BASE_URL?: string;
  readonly VITE_API_PROXY_TARGET?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface Window {
  __CONNECT_API_URL__?: string;
}
