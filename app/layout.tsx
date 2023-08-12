import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import AuthProvider from './AuthProvider';

import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/route';
import { Nav } from './component/nav';
import { useSession } from 'next-auth/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'title',
  description: 'description',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);

  return (
    <AuthProvider>
      <html lang='en'>
        <body className={inter.className}>
          <Nav session={session} />
          {children}
        </body>
      </html>
    </AuthProvider>
  );
}
