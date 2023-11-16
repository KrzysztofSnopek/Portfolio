import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Space_Grotesk } from "next/font/google";
import StarsCanvas from "./Helpers/Starbackground";

const inter = Inter({ subsets: ["latin"] });
const grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-grotesk",
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Created by Krzysztof Snopek",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${grotesk.variable} font-grotesk`}>
        <StarsCanvas />
        {children}
      </body>
    </html>
  );
}
