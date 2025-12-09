import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chalet Lièvre | Luxury 4-Bedroom Apartment in Verbier",
  description:
    "Experience alpine luxury at its finest. A stunning 4-bedroom apartment in the heart of Verbier, Switzerland. Breathtaking mountain views, premium amenities, and unparalleled comfort.",
  keywords: [
    "Verbier",
    "luxury apartment",
    "ski chalet",
    "Swiss Alps",
    "vacation rental",
    "4 bedroom",
    "Chalet Lièvre",
  ],
  openGraph: {
    title: "Chalet Lièvre | Luxury Apartment in Verbier",
    description:
      "A stunning 4-bedroom luxury apartment in the heart of Verbier, Switzerland.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${outfit.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
