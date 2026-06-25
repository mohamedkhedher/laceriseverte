import type { Metadata, Viewport } from "next";
import { Cinzel_Decorative, Cinzel, Poppins } from "next/font/google";
import "./globals.css";

const cinzelDecorative = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-title",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-subtitle",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#faf9f6",
};

export const metadata: Metadata = {
  title: "La Cerise Verte | Produits naturels & cosmétiques bio",
  description: "La Cerise Verte — produits naturels, cosmétiques bio et eaux florales inspirés par la pureté botanique. Découvrez nos hydrolats d'exception.",
};

import { CartProvider } from "@/components/CartContext";
import { GlobalModals } from "@/components/GlobalModals";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${cinzelDecorative.variable} ${cinzel.variable} ${poppins.variable}`}>
      <body className="antialiased font-sans bg-cream text-olive selection:bg-sage/30">
        <CartProvider>
          {children}
          <GlobalModals />
        </CartProvider>
      </body>
    </html>
  );
}
