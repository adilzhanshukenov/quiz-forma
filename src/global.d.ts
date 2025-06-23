export {};

declare global {
    interface Window {
      TiktokAnalyticsObject?: string; // Название глобального объекта TikTok Pixel
      ttq?: {
        track: (event: string, data?: Record<string, unknown>) => void;
        page: () => void;
        load: (pixelId: string) => void;
      };
      dataLayer: Record<string, unknown>[];
    }
  }  
