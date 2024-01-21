import type { Metadata } from "next";
import { Rajdhani } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartProvider from "@/components/CartProvider";
import { Toaster } from "@/components/ui/toaster";

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-rajdhani",
});

const siteConfig = {
  title: "Enchanted",
  description: "An online fragrance shop",
};

export const metadata: Metadata = {
  title: { default: siteConfig.title, template: `%s | ${siteConfig.title}` },
  description: siteConfig.description,
  icons: [
    {
      url: "/logo.png",
      href: "/logo.png",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={rajdhani.className} suppressHydrationWarning>
        <CartProvider>
          <Header />
          <Toaster />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
