import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from '@/lib/utils';
import "./globals.css";

const fontHeading = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
});
const fontBody = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});

interface LayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "SimuGen",
  description: "Realistic Clinical Scenarios, Effortlessly",
};

export default function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <html lang="en">
      <body 
        className={cn(
          'antialiased',
          fontHeading.variable,
          fontBody.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
