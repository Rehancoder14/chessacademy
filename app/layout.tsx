import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kingslayerchessclub.in"),
  title: {
    default: "Kingslayer Chess Academy | Chess Coaching, Club & Practice",
    template: "%s | Kingslayer Chess Academy",
  },
  description:
    "Kingslayer Chess Academy in Satara for kids, beginners and competitive players. Learn chess with coaches Aniket Bapat and Apurv Deshmukh near Sayali Hotel, Powai Naka.",
  keywords: [
    "chess",
    "satara chess",
    "satara chess club",
    "kingslayer chess academy",
    "kingslayer chess academy satara",
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
    title: "Kingslayer Chess Academy - Premium Chess Coaching",
    description:
      "Chess coaching, club membership and game practice in Satara with coaches Aniket Bapat and Apurv Deshmukh.",
    url: "https://www.kingslayerchessclub.in",
    siteName: "Kingslayer Chess Academy",
    locale: "en_IN",
    type: "website",
    images: [{ url: "/logo.png", width: 1254, height: 1254 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kingslayer Chess Academy",
    description:
      "Premium chess coaching, membership and game practice near Powai Naka, Satara.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full bg-[#f6f3eb] text-black antialiased">
        <div className="flex min-h-screen flex-col">
          <header className="sticky top-0 z-50 border-b border-white/10 bg-black/90 text-white shadow-md backdrop-blur-xl">
            <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4">
              <Link href="/" className="group flex items-center gap-3">
                <span className="brand-mark">
                  <Image
                    src="/logo.png"
                    alt="Kingslayer Chess Academy logo"
                    width={48}
                    height={48}
                    className="h-auto w-10 object-contain"
                  />
                </span>
                <span className="leading-none">
                  <span className="block text-xl font-black uppercase">
                    Kingslayer
                  </span>
                  <span className="block text-xs font-bold uppercase text-zinc-400">
                    Chess Academy
                  </span>
                </span>
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
              &copy; 2026 Kingslayer Chess Academy - All rights reserved.
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}
