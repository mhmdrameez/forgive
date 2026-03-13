import type { Metadata, Viewport } from "next";
import "./globals.css";
import BottomNav from "@/components/BottomNav";
import Translator from "@/components/Translator";
import { cookies } from "next/headers";
import { getTranslations } from "@/lib/redis";

export const metadata: Metadata = {
  title: "Forgive",
  description: "A calm space for practicing forgiveness.",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Forgive App",
  },
};

export const viewport: Viewport = {
  themeColor: "#FCFAF8",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const initialLang = cookieStore.get("forgive_lang")?.value || null;
  const initialTranslations = initialLang ? await getTranslations(initialLang) : {};

  return (
    <html lang={initialLang || "en"}>
      <body className="antialiased mx-auto max-w-md bg-[var(--background)] shadow-2xl relative min-h-screen">
        <Translator initialLang={initialLang} initialTranslations={initialTranslations} />
        <main className="flex-1 w-full max-w-md mx-auto bg-[var(--background)] min-h-screen">
          {children}
        </main>
        <BottomNav />
      </body>
    </html>
  );
}
