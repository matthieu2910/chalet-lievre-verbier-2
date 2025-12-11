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
  metadataBase: new URL("https://chalet-lievre-verbier.com"),
  title: {
    default: "Rent Apartment in Verbier | Chalet Lièvre - Luxury 4-Bedroom Rental",
    template: "%s | Rent Chalet in Verbier",
  },
  description:
    "Rent a luxury apartment in Verbier at Chalet Lièvre. Stunning 110 m², 4-bedroom chalet rental with panoramic mountain views. Perfect for ski holidays and summer adventures. Book your Verbier apartment rental now.",
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
    title: "Rent Apartment in Verbier | Chalet Lièvre - Luxury 4-Bedroom Rental",
    description:
      "Rent a luxury apartment in Verbier. Stunning 110 m², 4-bedroom chalet rental with panoramic mountain views. Perfect for ski holidays and alpine adventures.",
    url: "https://chalet-lievre-verbier.com",
    siteName: "Chalet Lièvre Verbier",
    images: [
      {
        url: "/images/uploads/exterieur.jpg",
        width: 1200,
        height: 630,
        alt: "Chalet Lièvre - Rent luxury apartment in Verbier",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rent Apartment in Verbier | Chalet Lièvre",
    description:
      "Rent a luxury 4-bedroom apartment in Verbier. 110 m² chalet rental with panoramic mountain views. Perfect for ski holidays.",
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
    <html lang="en" className={`${cormorant.variable} ${outfit.variable}`}>
      <body className="font-sans">
        {children}
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
