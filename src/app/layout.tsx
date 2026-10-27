import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "co.lab.hub",
  description: "co.lab.hub",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
