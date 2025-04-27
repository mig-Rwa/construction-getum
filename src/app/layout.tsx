import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GETUM Supply - Building Dreams into Reality",
  description: "GETUM Supply brings your vision to life with expert craftsmanship, quality materials, and unparalleled service.",
  keywords: "construction, building, renovation, commercial construction, residential construction",
  authors: [{ name: "GETUM Supply" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50`}>
        <div className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
