
/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_TIKTOK_PIXEL_ID: string;
    readonly VITE_TIKTOK_PIXEL_ACCESS_TOKEN: string;
    readonly VITE_FACEBOOK_PIXEL_ID: string;
    readonly VITE_FACEBOOK_ACCESS_TOKEN: string;
    readonly VITE_GTM_ID: string;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  