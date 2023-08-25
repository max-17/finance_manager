import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';
import { formatPrice } from '@/lib/utils';

export default async function Statics() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return redirect('/api/auth/signin');
  }
  const currentUserImage = session?.user?.image!;

  const user = await prisma.user.findFirst({
    where: {
      image: currentUserImage,
    },
  });
  const expenses = await prisma.expense.findMany({
    where: {
      user: {
        id: user?.id!,
      },
    },
  });

  const thisWeek = expenses.filter((expense) => {
    const date = new Date(expense.date);
    const today = new Date();
    const week = today.getDate() - date.getDate();
    return week <= 7;
  });

  const sumOfThisWeek = thisWeek.reduce((acc, expense) => {
    return acc + expense.amount;
  }, 0);

  return (
    <>
      <span>this week: {formatPrice(sumOfThisWeek)} KRW</span>
    </>
  );
}
