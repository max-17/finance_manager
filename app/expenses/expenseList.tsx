import type { Category } from '@prisma/client';

type Expense = {
  id: string;
  name: string;
  amount: number;
  description: string | null;
  date: Date;
  userId: string;
  categoryId: string | null;
  Category: Category | null;
  groupId: string | null;
};

export default function ExpenseList({ expenses }: { expenses: Expense[] }) {
  console.log('expenses', expenses);

  return (
    <div className='stats stats-vertical shadow w-full px-4 gap-2'>
      {expenses.map(({ name, amount, date, id, Category }) => (
        <div key={id} className='stat'>
          <div className='stat-figure'>
            <span className='text-4xl text-red-500 font-extrabold'>-{amount} </span>
            <span className='text-xl'> KRW</span>
          </div>
          <div className='stat-title'>{Category?.name ?? ''}</div>
          <div className='text-2xl font-bold'>{name}</div>
          <div className='stat-desc'>{date.toLocaleString()}</div>
        </div>
      ))}
    </div>
  );
}
