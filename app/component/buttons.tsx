'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';

export function SingInButton() {
  const { data: session, status } = useSession();
  console.log(session, status);

  if (status === 'loading') return <div>Loading...</div>;

  if (status === 'authenticated')
    return (
      <div>
        <a href='/dashboard'>
          <Image
            src={session?.user?.image ?? 'https://api.multiavatar.com/random'}
            alt={session?.user?.name ?? 'user name'}
            width={32}
            height={32}
          />
        </a>
      </div>
    );

  return (
    <button
      type='button'
      className='bg-blue-500 hover:bg-blue-700  px-3 py-2 rounded-md text-white font-medium'
      onClick={() => signIn()}
    >
      Sign In
    </button>
  );
}

export function SingOutButton() {
  return (
    <a
      type='button'
      className='bg-red-500 hover:bg-red-700 px-3 py-2 rounded-md text-white text-sm font-medium'
      onClick={() => signOut()}
    >
      Sign Out
    </a>
  );
}
