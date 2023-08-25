'use client';

import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';

export default function ExpenseForm() {
  const expenseCategories = [
    'Housing',
    'Transportation',
    'Food',
    'Healthcare',
    'Entertainment',
    'Utilities',
    'Debt Payments',
    'Shopping',
    'Travel',
    'Gifts and Donations',
    'Savings',
    'Education',
    'Childcare',
    'Personal Care',
    'Insurance',
    'Taxes',
    'Pet Expenses',
    'Others',
  ];

  const [loading, setLoading] = useState(false);

  const router = useRouter();

  // console.log('user', user);

  const nameRef = useRef<HTMLInputElement>(null);
  const amountRef = useRef<HTMLInputElement>(null);
  const categoryRef = useRef<HTMLSelectElement>(null);

  const onSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      name: nameRef?.current?.value ?? '',
      amount: amountRef?.current?.value ?? 0,
      Category: categoryRef?.current?.selectedOptions[0].value ?? '',
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
      setLoading(false);
      router.refresh();
      window.my_modal_3.close();
      //reset form
      nameRef.current.value = '';
      amountRef.current.value = '';
      categoryRef.current.selectedIndex = 0;
    }
  };
  return (
    <>
      <div className='form-control' id='expense-form'>
        <label className='label'>
          <span className='label-text'>Expense name</span>
        </label>
        <input
          ref={nameRef}
          type='text'
          name='expense-name'
          placeholder='Name...'
          className='input input-bordered input-lg'
        />
        <label className='label'>
          <span className='label-text'>Expense amount</span>
        </label>
        <label className='input-group'>
          <input
            ref={amountRef}
            className='w-full input input-bordered input-lg join-item'
            name='expense-amount'
            type='number'
            placeholder='000 000'
          />
          <span className='label join-item'>KRW</span>
        </label>

        <label className='label'>
          <span className='label-text'>Expense category</span>
        </label>
        <select className='select select-bordered w-full input-lg' ref={categoryRef}>
          <option value='Select expense category'>
            Select expense category
          </option>
          {expenseCategories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <button className='btn btn-primary mt-5' onClick={onSubmit}>
          {loading ? <span className='loading loading-spinner loading-md'></span> : 'Submit'}
        </button>
      </div>
    </>
  );
}
