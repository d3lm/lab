import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { EB_Garamond } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lab | Vaun Blu",
};

const EBGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-eb-garamond",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.variable} ${EBGaramond.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
