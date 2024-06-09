import { Inter } from "next/font/google";
import "../styles/global.css";
import "../styles/variable.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Desarrollador Gallardo",
  description: "Desarrollador de paginas web, aplicaciones moviles y consultoria personal. Chileno.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
  
}

