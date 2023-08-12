import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/route';
import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { stat } from 'fs';

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);

  const data = await req.json();
  data.amount = Number(data.amount);

  const userInstance = await prisma.user.findFirst({
    where: {
      image: session?.user?.image,
    },
  });

  const expense = await prisma.expense.create({
    data: {
      ...data,
      user: {
        connect: {
          id: userInstance?.id,
        },
      },
    },
  });
  return NextResponse.json(expense, { status: 201 });
}
