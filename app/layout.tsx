import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/page";
import Nav from "./components/Nav/page";
import Footer from "./components/Footer/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eive Autonetics",
  description: "Solution to every automated works",
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
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
