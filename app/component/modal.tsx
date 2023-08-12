'use client';

import { cloneElement } from 'react';

export default function Modal({
  children,
  button,
}: {
  children: React.ReactNode;
  button: React.ReactNode | React.ReactElement | any;
}) {
  return (
    <>
      {cloneElement(button, { onClick: () => window.my_modal_3.showModal() })}

      <dialog id='my_modal_3' className='modal'>
        <form method='dialog' className='modal-box'>
          <button className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>✕</button>
          {children}
        </form>
      </dialog>
    </>
  );
}
