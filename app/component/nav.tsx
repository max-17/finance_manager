'use client';

import { HomeIcon } from '@heroicons/react/20/solid';
import { ChartBarIcon } from '@heroicons/react/24/solid';
import { UsersIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { usePathname, redirect } from 'next/navigation';
import { SingInButton, SingOutButton } from './buttons';
import Image from 'next/image';
import { Session } from 'next-auth';

export function Nav({ session }: { session: Session | null }) {
  const pathname = usePathname();
  const current = pathname.split('/')[1] ? pathname.split('/')[1] : 'Home';

  if (!session && pathname !== '/') {
    redirect('/');
  }

  return (
    <>
      <div className='navbar'>
        <div className='navbar-start'>
          <div className='dropdown'>
            <label tabIndex={0} className='btn btn-ghost btn-circle'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h7' />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
            >
              <li>
                <a>Homepage</a>
              </li>
              <li>
                <a>Portfolio</a>
              </li>
              <li>
                <a>About</a>
              </li>
            </ul>
          </div>
        </div>
        <div className='navbar-center'>
          <p className='text-3xl capitalize'>{current}</p>
        </div>
        <div className='navbar-end'>
          {session ? (
            <div className='dropdown dropdown-end'>
              <label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
                <div className='w-10 rounded-full'>
                  <Image src={session?.user?.image ?? ''} alt='user image' width='100' height='100' />
                </div>
              </label>
              <ul
                tabIndex={0}
                className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
              >
                <li>
                  <a className='justify-between'>
                    Profile
                    <span className='badge'>New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <SingOutButton />
                </li>
              </ul>
            </div>
          ) : (
            <SingInButton />
          )}
        </div>
      </div>

      <div className='tabs justify-around'>
        <Link href='/' className={'tab tab-bordered ' + (pathname === '/' && 'tab-active')}>
          <HomeIcon className='h-5 w-5' />
          <span className=' text-sm'>Home</span>
        </Link>
        <Link href='statics' className={'tab tab-bordered ' + (pathname === '/statics' && 'tab-active')}>
          <ChartBarIcon className='h-5 w-5' />

          <span className=' text-sm'>Statics</span>
        </Link>

        <Link href='groups' className={'tab tab-bordered ' + (pathname === '/groups' && 'tab-active')}>
          <UsersIcon className='h-5 w-5' />
          <span className=' text-sm'>Groups</span>
        </Link>
      </div>
    </>
  );
}
