import { Montserrat } from "next/font/google";
import "./products.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export default function ProductsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${montserrat.variable} ${montserrat.className} products-landing-root flex min-h-full w-full flex-1 flex-col`}
    >
      {children}
    </div>
  );
}
