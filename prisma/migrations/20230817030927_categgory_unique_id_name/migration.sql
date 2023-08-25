/*
  Warnings:

  - A unique constraint covering the columns `[id,name]` on the table `Category` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Expense" DROP CONSTRAINT "Expense_categoryId_fkey";

-- AlterTable
ALTER TABLE "Expense" ADD COLUMN     "categoryName" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Category_id_name_key" ON "Category"("id", "name");

-- AddForeignKey
ALTER TABLE "Expense" ADD CONSTRAINT "Expense_categoryId_categoryName_fkey" FOREIGN KEY ("categoryId", "categoryName") REFERENCES "Category"("id", "name") ON DELETE SET NULL ON UPDATE CASCADE;
