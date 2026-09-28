import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "بكري | مطوّر برمجيات مستقل",
  description:
    "بكري — مطوّر برمجيات مستقل من الخرطوم، متخصص في بناء تطبيقات وأنظمة عملية تعمل دون اتصال إنترنت للسوق السوداني: تطبيقات موبايل، أنظمة سطح مكتب، ولوحات تحكم.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ar" dir="rtl" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700;800&family=IBM+Plex+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-paper text-ink">
        {children}
      </body>
    </html>
  );
}
