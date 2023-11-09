import type { Metadata } from 'next';
import { Open_Sans, Damion } from 'next/font/google';
import './globals.css';

import { APP_NAME, APP_URL } from '@/config/constants';
import { ThemeProvider } from '@/components/providers/theme-provider';

const sans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
});

const serif = Damion({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  metadataBase: new URL(APP_URL),
  title: {
    default: APP_NAME,
    template: `%s | ${APP_NAME}`,
  },
  description: 'Your all-in-one platform for notes, tasks, and ideas.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${serif.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
