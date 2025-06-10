import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crud Sample",
  description: "Simple CRUD sample front-end application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
