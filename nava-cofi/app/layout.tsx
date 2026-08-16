import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nava Cofi",
  description: "Menú de café",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}