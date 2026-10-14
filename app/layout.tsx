import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://chess-academy.example.com"),
  title: {
    default: "Chess Academy Satara | Chess Coaching, Club & Practice",
    template: "%s | Chess Academy Satara",
  },
  description:
    "Chess Academy in Satara for kids, beginners and competitive players. Learn chess with coaches Aniket Bapat and Apurv Deshmukh near Sayali Hotel, Powai Naka.",
  keywords: [
    "chess",
    "satara chess",
    "satara chess club",
    "chess academy",
    "chess academy satara",
    "chess coaching",
    "chess coaching in satara",
    "chess classes satara",
    "satara chess club",
    "chess training",
    "kids chess classes",
    "chess membership",
    "chess game practice",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Chess Academy Satara - Premium Chess Coaching",
    description:
      "Chess coaching, club membership and game practice in Satara with coaches Aniket Bapat and Apurv Deshmukh.",
    url: "https://chess-academy.example.com",
    siteName: "Chess Academy",
    locale: "en_IN",
    type: "website",
    images: [{ url: "/chess-3d-hero.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chess Academy Satara",
    description:
      "Premium chess coaching, membership and game practice near Powai Naka, Satara.",
    images: ["/chess-3d-hero.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full bg-white text-black antialiased">
        <div className="flex min-h-screen flex-col">
          <header className="bg-black text-white shadow-md">
            <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4">
              <Link href="/" className="text-2xl font-bold">
                Chess Academy
              </Link>
              <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium">
                <li>
                  <Link href="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/#coaches" className="hover:underline">
                    Coaches
                  </Link>
                </li>
                <li>
                  <Link href="/#programs" className="hover:underline">
                    Programs
                  </Link>
                </li>
                <li>
                  <Link href="/#enquiry" className="hover:underline">
                    Enquiry
                  </Link>
                </li>
              </ul>
            </nav>
          </header>
          <main className="w-full flex-1">{children}</main>
          <footer className="bg-black px-4 py-4 text-center text-sm text-white">
            <p>
              &copy; 2026 Chess Academy - All rights reserved.
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}
