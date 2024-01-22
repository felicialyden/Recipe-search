/*
  Warnings:

  - You are about to drop the `Saved` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "public"."Saved";

-- DropTable
DROP TABLE "public"."User";

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Saved" (
    "id" SERIAL NOT NULL,
    "recipeId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Saved_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
