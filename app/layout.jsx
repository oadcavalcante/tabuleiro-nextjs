import { Inter } from "next/font/google";
import "@/app/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tabuleiro",
  description: "Tabuleiro",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
