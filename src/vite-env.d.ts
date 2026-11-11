/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CORPORATE_URL?: string;
  readonly VITE_PARTNER_URL?: string;
  readonly VITE_CONTACT_EMAIL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
