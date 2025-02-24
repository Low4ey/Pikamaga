import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PIKAMAGA (PMG) - The Most SHOCKING Memecoin of 2025! 🚀',
  description: 'PIKAMAGA (PMG) is SHOCKING the crypto world with 500% gains! Join the revolution of the most electrifying memecoin combining Pikachu and MAGA energy!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}