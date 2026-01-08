import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";

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
  metadataBase: new URL("https://chalet-lievre-verbier.com"),
  title: {
    default: "Location Appartement à Verbier | Chalet Lièvre - Location Luxe 4 Chambres",
    template: "%s | Location Chalet à Verbier",
  },
  description:
    "Louez un appartement de luxe à Verbier au Chalet Lièvre. Magnifique location de chalet de 110 m², 4 chambres avec vues panoramiques sur les montagnes. Parfait pour les vacances au ski et les aventures estivales. Réservez votre location d'appartement à Verbier maintenant.",
  keywords: [
    "rent apartment Verbier",
    "rent chalet Verbier",
    "Verbier apartment rental",
    "Verbier chalet rental",
    "luxury apartment Verbier",
    "ski chalet rental",
    "Swiss Alps vacation rental",
    "4 bedroom Verbier",
    "Chalet Lièvre",
    "appartement à louer Verbier",
    "chalet à louer Verbier",
    "location appartement Verbier",
    "location chalet Verbier",
    "Verbier accommodation",
    "luxury ski rental",
    "alpine retreat",
    "Switzerland vacation",
    "mountain view apartment",
    "ski in ski out",
    "Savoleyres lift",
    "rent Verbier",
    "Verbier rental",
  ],
  authors: [{ name: "Chalet Lièvre" }],
  creator: "Chalet Lièvre",
  publisher: "Chalet Lièvre",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Location Appartement à Verbier | Chalet Lièvre - Location Luxe 4 Chambres",
    description:
      "Louez un appartement de luxe à Verbier. Magnifique location de chalet de 110 m², 4 chambres avec vues panoramiques sur les montagnes. Parfait pour les vacances au ski et les aventures alpines.",
    url: "https://chalet-lievre-verbier.com",
    siteName: "Chalet Lièvre Verbier",
    images: [
      {
        url: "/images/uploads/exterieur.jpg",
        width: 1200,
        height: 630,
        alt: "Chalet Lièvre - Location appartement de luxe à Verbier",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Location Appartement à Verbier | Chalet Lièvre",
    description:
      "Louez un appartement de luxe 4 chambres à Verbier. Location de chalet de 110 m² avec vues panoramiques sur les montagnes. Parfait pour les vacances au ski.",
    images: ["/images/uploads/exterieur.jpg"],
  },
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png", sizes: "32x32" },
      { url: "/logo.png", type: "image/png", sizes: "16x16" },
    ],
    apple: [
      { url: "/logo.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/logo.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://chalet-lievre-verbier.com",
  },
  category: "Travel",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${outfit.variable}`}>
      <body className="font-sans">
        <Providers>
          {children}
        </Providers>
        {/* Netlify Identity Widget - handles invitation tokens */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined') {
                // Check if this is an invitation or recovery link
                const hash = window.location.hash;
                if (hash.includes('invite_token=') || hash.includes('recovery_token=')) {
                  // Redirect to admin page to handle the token
                  window.location.href = '/admin/' + hash;
                } else {
                  // Load Identity widget for normal pages
                  const script = document.createElement('script');
                  script.src = 'https://identity.netlify.com/v1/netlify-identity-widget.js';
                  script.async = true;
                  document.head.appendChild(script);
                }
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
