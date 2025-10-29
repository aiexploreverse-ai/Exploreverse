import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Exploreverse - Explore the Universe of Possibilities",
  description: "Modern tech solutions for tomorrow's challenges",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
