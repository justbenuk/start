import type { Metadata } from "next";
import "./globals.css";
import { LayoutProps } from "@/types";


export const metadata: Metadata = {
  title: {
    template: '%s, | Just Ben UK',
    default: 'Just Ben UK'
  },
  description: "Freelance web developer based in Tamworth",
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
