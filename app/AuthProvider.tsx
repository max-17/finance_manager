'use client';

import { SessionProvider } from 'next-auth/react';

//create session provider to wrap the app
type Props = {
  children: React.ReactNode;
};

export default function AuthProvider({ children }: Props) {
  return <SessionProvider>{children}</SessionProvider>;
}
