"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import LoadingScreen from "./components/LoadingScreen";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);

  useEffect(() => {
    if (pathname !== prevPathname) {
      setIsLoading(true);
      setPrevPathname(pathname);
    }
  }, [pathname, prevPathname]);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <html lang="en">
      <head>
        <title>Badariya Pharma - Ayurvedic Solutions</title>
        <meta
          name="description"
          content="Authentic Ayurvedic medicines and health solutions by Badariya Pharma"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LoadingScreen
          isLoading={isLoading}
          onLoadingComplete={handleLoadingComplete}
        />
        {children}
      </body>
    </html>
  );
}
