import Navigation from "@/components/navigation/Navigation.component";
import "./../globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "About Us",
  description: "This page tells the story of our company.",
};

type LayoutProps = {
  children: React.ReactNode;
};

export default function AboutLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
