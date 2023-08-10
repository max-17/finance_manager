import { redirect } from 'next/navigation';

import { getSession } from 'next-auth/react';

import { PlusIcon } from '@heroicons/react/24/outline';
export default async function Home(session: any) {
  if (!session) {
    return redirect('/api/auth/signin');
  }

  return (
    <>
      {/* <nav className='bg-gray-800'>
        <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
          <div className='relative flex items-center justify-between h-16'>
            <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
              <div className='flex-shrink-0 flex items-center text-lg'>
                
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
      </nav> */}
      <div className='card w-96 bg-primary text-primary-content m-auto my-4'>
        <div className='card-body'>
          <h2 className='card-title'>Card title!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className='card-actions justify-end'>
            <button className='btn'>Buy Now</button>
          </div>
        </div>
      </div>
      <button
        onClick={ () => console.log('click')})
        
        className='fixed z-90 bottom-10 right-8 bg-primary w-14 h-14 rounded-full drop-shadow-lg flex justify-center items-center text-white hover:bg-indigo-800 hover:drop-shadow-2xl hover:animate-bounce'
      >
        <PlusIcon className='w-5 h-5' />
      </button>
    </>
      );
}

export async function getServerSideProps(context: any) {
  const session = await getSession(context);
  return {
    props: { session },
  };
}
