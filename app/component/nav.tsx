'use client';

import { HomeIcon } from '@heroicons/react/20/solid';
import { ChartBarIcon } from '@heroicons/react/24/solid';
import { UsersIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import Link from 'next/link';

export function BottomNav() {
  const [classes, setClasses] = useState({ home: 'btm-nav-btn active', statics: 'btm-nav-btn', groups: 'btm-nav-btn' });

  function setActive(active: string) {
    const classes = { home: 'btm-nav-btn', statics: 'btm-nav-btn', groups: 'btm-nav-btn' };

    if (active === 'home') {
      setClasses({ ...classes, home: 'btm-nav-btn active' });
    } else if (active === 'statics') {
      setClasses({ ...classes, statics: 'btm-nav-btn active' });
    } else if (active === 'groups') {
      setClasses({ ...classes, groups: 'btm-nav-btn active' });
    }
  }

  return (
    <div className='btm-nav bg-slate-800'>
      <Link href='/' className={classes.home} onClick={() => setActive('home')}>
        <HomeIcon className='h-6 w-6' />
        <span className='btm-nav-label'>Home</span>
      </Link>
      <Link href='statics' className={classes.statics} onClick={() => setActive('statics')}>
        <ChartBarIcon className='h-6 w-6' />

        <span className='btm-nav-label'>Statics</span>
      </Link>

      <Link href='groups' className={classes.groups} onClick={() => setActive('groups')}>
        <UsersIcon className='h-6 w-6' />
        <span className='btm-nav-label'>Groups</span>
      </Link>
    </div>
  );
}
