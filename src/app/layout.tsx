import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar/NavBar";
import BackgroundCanvas from "@/components/BackgroundCanvas";
import SplashScreen from "@/components/SplashScreen";
import dynamic from "next/dynamic";

const inter = Inter({ subsets: ["latin"] });

// const SplashScreen = dynamic(
//   () => {
//     return import("@/components/SplashScreen");
//   },
//   {
//     ssr: false,
//   }
// );

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
        <SplashScreen />
        <BackgroundCanvas />
        <main className="flex min-h-screen flex-col bg-primary">
          <NavBar />
          {children}
        </main>
      </body>
    </html>
  );
}
