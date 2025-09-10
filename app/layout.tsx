import type { Metadata } from "next";
import { Raleway, Lato } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const raleway = Raleway({ 
  subsets: ["latin"],
  variable: "--font-raleway" 
});

const lato = Lato({ 
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-lato"
});

export const metadata: Metadata = {
  title: "Tech Mission",
  description: "Make your Digital presence matter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
        "min-h-screen bg-background font-lato antialiased",
        raleway.variable,
        lato.variable
      )}>
        {children}
      </body>
    </html>
  );
}