import { Inter } from 'next/font/google';
import classNames from 'classnames';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Jae Park Portfolio',
  description: 'Portfolio of Software Engineer Jae Park',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const classes = classNames(inter.className, 'container mx-auto px-4');

  return (
    <html lang="en">
      <body className={classes}>{children}</body>
    </html>
  );
}
