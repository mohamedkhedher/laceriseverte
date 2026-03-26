import type { Metadata, Viewport } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#faf9f6",
};

export const metadata: Metadata = {
  title: "La Cerise Verte | Produits naturels & cosmétiques bio — Bientôt en ligne",
  description: "La Cerise Verte prépare son univers de produits naturels, cosmétiques bio et eaux florales inspirés par la pureté botanique.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="antialiased font-sans bg-cream text-olive selection:bg-sage/30">
        {children}
      </body>
    </html>
  );
}
