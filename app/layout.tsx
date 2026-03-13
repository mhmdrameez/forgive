import type { Metadata, Viewport } from "next";
import "./globals.css";
import BottomNav from "@/components/BottomNav";
import Translator from "@/components/Translator";
import PrivacyLock from "@/components/PrivacyLock";


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
  return (
    <html lang="en">
      <body className="antialiased mx-auto max-w-md bg-[var(--background)] shadow-2xl relative min-h-screen">
        <Translator />
        <PrivacyLock>
          <main className="flex-1 w-full max-w-md mx-auto bg-[var(--background)] min-h-screen">
            {children}
          </main>
        </PrivacyLock>
        <BottomNav />
      </body>
    </html>
  );
}
