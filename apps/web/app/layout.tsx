import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import SearchBar from "@/components/layout/search-bar";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
export const metadata: Metadata = {
  title: "FAD-DIS",
  description: "Supermarché en ligne FAD-DIS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={poppins.className}>
        <Header />
        <SearchBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}