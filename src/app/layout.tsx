import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./provider";
import Navbar from "./navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ameya Bavkar",
  description: "A MERN Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Providers>
        <body className={inter.className}>
          <Navbar />
          {children}
        </body>
      </Providers>
    </html>
  );
}
