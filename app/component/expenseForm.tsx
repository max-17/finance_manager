'use client';

import { useRouter } from 'next/navigation';
import { useRef } from 'react';

export default function ExpenseForm() {
  const router = useRouter();

  // console.log('user', user);

  const nameRef = useRef<HTMLInputElement>(null);
  const amountRef = useRef<HTMLInputElement>(null);

  const onSubmit = async (e: any) => {
    e.preventDefault();
    console.log(e);

    const data = {
      name: nameRef?.current?.value ?? '',
      amount: amountRef?.current?.value ?? 0,
    };
    const res = await fetch('/api/expense', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    // console.log(res);
    if (res.ok) {
      router.refresh();
      window.my_modal_3.close();
    }
  };
  return (
    <>
      <div className='form-control' id='expense-form'>
        <label className='label'>
          <span className='label-text'>Expense name</span>
        </label>
        <label className='input-group input-group-vertical input-group-lg'>
          <input
            ref={nameRef}
            type='text'
            name='expense-name'
            placeholder='Name...'
            className='input input-bordered input-lg'
          />
        </label>
        <label className='label'>
          <span className='label-text'>Expense amount</span>
        </label>
        <label className='input-group input-group-vertical input-group-lg'>
          <div className='join'>
            <input
              ref={amountRef}
              className='w-full input input-bordered input-lg join-item'
              name='expense-amount'
              type='number'
              placeholder='000 000'
            />
            <span className='label join-item'>KRW</span>
          </div>
        </label>
        <button className='btn btn-primary mt-5' onClick={onSubmit}>
          Submit
        </button>
      </div>
    </>
  );
}
