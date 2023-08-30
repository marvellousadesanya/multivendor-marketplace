import "./globals.css";
import type { Metadata } from "next";
import { Manrope, Bebas_Neue } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-manrope",
});

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bebas",
});

export const metadata: Metadata = {
  title: "ByteMarket",
  description: "Tech marketplace",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} font-sans ${bebas.variable} font-bebas`}>
        {children}
      </body>
    </html>
  );
}
