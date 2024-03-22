import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar/NavBar";
import Script from "next/script";
import BackgroundCanvas from "@/components/BackgroundCanvas";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portforlio | Kaung Min Khant",
  description: "Portfolio by Kaung Min Khant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative`}>
        <BackgroundCanvas />
        <main className="flex min-h-screen flex-col bg-primary">
          <NavBar />
          {children}
        </main>
      </body>
      <Script src="" />
    </html>
  );
}
