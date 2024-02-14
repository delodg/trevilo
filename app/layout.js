import { Inter } from "next/font/google";
import "./globals.css";
import 'remixicon/fonts/remixicon.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Trevilo",
  description: "Enjoy exclusive offers and best prices for satisfying travel packages.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={'${inter.className} antialiased border-8 border-gray-50 rounded-3xl m-4 '}>{children}</body>
    </html >
  );
}
