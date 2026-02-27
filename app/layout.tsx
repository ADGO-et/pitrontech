import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "PitronTech - Enterprise Software Development Company",
    template: "%s | PitronTech",
  },
  description:
    "PitronTech is a world-class enterprise software development company specializing in web, mobile, SaaS, ERP, and cloud solutions.",
  keywords: [
    "software development",
    "enterprise software",
    "web development",
    "mobile app development",
    "SaaS development",
    "ERP systems",
    "DevOps",
    "Ethiopia",
    "Africa",
    "PitronTech",
  ],
  authors: [{ name: "PitronTech" }],
  creator: "PitronTech",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pitrontech.com",
    siteName: "PitronTech",
    title: "PitronTech — Enterprise Software Development",
    description:
      "We build world-class digital products for ambitious companies. Expert in web, mobile, SaaS, ERP, and cloud solutions.",
  },
  twitter: {
    card: "summary_large_image",
    title: "PitronTech - Enterprise Software Development",
    description: "Enterprise software engineering that scales.",
    creator: "@PitronTech",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/logos/pitron.png",
    shortcut: "/logos/pitron.png",
    apple: "/logos/pitron.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => {
              try {
                const savedTheme = localStorage.getItem("theme");
                const theme = savedTheme === "light" || savedTheme === "dark" ? savedTheme : "dark";
                document.documentElement.setAttribute("data-theme", theme);
              } catch {}
            })();`,
          }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
