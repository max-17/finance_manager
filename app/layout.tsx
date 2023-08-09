import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import AuthProvider from './AuthProvider';
import { BottomNav } from './component/nav';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'title',
  description: 'description',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <html lang='en'>
        <body className={inter.className}>
          {children}
          <BottomNav />
        </body>
      </html>
    </AuthProvider>
  );
}
