import type { Metadata } from "next";
import { Geist, Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Valen.pl — Serwer Minecraft",
  description: "Oficjalna strona serwera Minecraft valen.pl. Dołącz do nas!",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={`${geist.variable} ${raleway.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#060608] text-zinc-100">
        <Navbar />
        <main className="flex-1 pt-[65px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
