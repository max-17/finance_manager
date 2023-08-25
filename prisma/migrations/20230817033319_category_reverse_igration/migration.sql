/*
  Warnings:

  - You are about to drop the column `categoryName` on the `Expense` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Expense" DROP CONSTRAINT "Expense_categoryId_categoryName_fkey";

-- DropIndex
DROP INDEX "Category_id_name_key";

-- AlterTable
ALTER TABLE "Expense" DROP COLUMN "categoryName";

-- AddForeignKey
ALTER TABLE "Expense" ADD CONSTRAINT "Expense_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;
