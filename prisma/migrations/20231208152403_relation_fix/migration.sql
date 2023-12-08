/*
  Warnings:

  - Added the required column `userId` to the `Saved` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Saved" ADD COLUMN     "userId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Saved" ADD CONSTRAINT "Saved_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
