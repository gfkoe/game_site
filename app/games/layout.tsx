import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gameboards",
  description: "A website made by Gabriel Koeb",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <hr />
        <Footer />
      </body>
    </html>
  );
}
