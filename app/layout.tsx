import type { Metadata } from "next";
import { Noto_Naskh_Arabic } from "next/font/google";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import "./globals.css";

const notoNaskhArabic = Noto_Naskh_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Asas Al Arabiya | Arabic for curious minds",
  description: "Live Arabic courses for curious minds.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ar" dir="rtl" className={`${notoNaskhArabic.variable} h-full antialiased`}>
      <body className="container min-h-full flex flex-col">
        <Theme accentColor="orange" grayColor="sand" radius="medium">
          {children}
        </Theme>
      </body>
    </html>
  );
}
