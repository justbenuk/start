import type { Metadata } from "next";
import "./globals.css";
import { LayoutProps } from "@/types";
import { ThemeProvider } from "next-themes";


export const metadata: Metadata = {
  title: {
    template: '%s, | Just Ben UK',
    default: 'Just Ben UK'
  },
  description: "Freelance web developer based in Tamworth",
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider defaultTheme="light" disableTransitionOnChange attribute='class'>{children}</ThemeProvider>
      </body>
    </html>
  );
}
