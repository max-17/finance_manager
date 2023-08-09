import { SingInButton, SingOutButton } from './component/buttons';
import { redirect } from 'next/navigation';

import { getSession } from 'next-auth/react';

import { HomeIcon, ChartBarIcon, UsersIcon } from '@heroicons/react/24/outline';
import { BottomNav } from './component/nav';
export default async function Home(session: any) {
  if (!session) {
    return redirect('/api/auth/signin');
  }

  return (
    <>
      <nav className='bg-gray-800'>
        <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
          <div className='relative flex items-center justify-between h-16'>
            <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
              <div className='flex-shrink-0 flex items-center text-lg'>
                💹
                {/* <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} /> */}
                <p className=' text-slate-200'>Logo</p>
              </div>

              <div className='hidden sm:block sm:ml-6'>
                <div className='flex space-x-4'>
                  <a href='#' className='bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium'>
                    Dashboard
                  </a>
                  <a
                    href='#'
                    className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                  >
                    Team
                  </a>
                  <a
                    href='#'
                    className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                  >
                    Projects
                  </a>
                  <a
                    href='#'
                    className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                  >
                    Calendar
                  </a>
                </div>
              </div>
            </div>

            <div className='hidden sm:block sm:ml-6'>
              <div className='flex space-x-4'>
                <SingInButton />
                <SingOutButton />
              </div>
            </div>
          </div>
        </div>
      </nav>
      <h1 className='text-4xl text-center'>Home</h1>
    </>
  );
}

export async function getServerSideProps(context: any) {
  const session = await getSession(context);
  return {
    props: { session },
  };
}
