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
