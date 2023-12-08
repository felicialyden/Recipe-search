/*
  Warnings:

  - You are about to drop the column `img` on the `Saved` table. All the data in the column will be lost.
  - Added the required column `image` to the `Saved` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Saved" DROP COLUMN "img",
ADD COLUMN     "image" TEXT NOT NULL;
