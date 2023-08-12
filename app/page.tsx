import { redirect } from 'next/navigation';

import { PlusIcon } from '@heroicons/react/24/outline';
import ExpenseForm from './component/expenseForm';
import Modal from './component/modal';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/route';

export default async function Home() {
  const session = await getServerSession(authOptions);

  // if (!session) {
  //   return redirect('/api/auth/signin');
  // }
  const currentUserImage = session?.user?.image!;

  const user = await prisma.user.findFirst({
    where: {
      image: currentUserImage,
    },
  });

  const expenses = await prisma.expense.findMany({
    where: {
      userId: user?.id,
    },
  });

  return (
    <>
      <Modal
        button={
          <button className='btn bg-primary border-none btn-outline btn-circle fixed z-90 bottom-10 right-8'>
            <PlusIcon className='w-5 h-5' />
          </button>
        }
      >
        <ExpenseForm />
      </Modal>

      <ul className='rounded-sm'>
        {expenses.map((expense) => (
          <li key={expense.id} className='flex items-center justify-between p-4 border-b border-slate-300'>
            <span>{expense.date.toLocaleString()}</span>
            {expense.name}
            <span className='text-primary'>
              {'-'}
              {expense.amount} {' KRW'}
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}
