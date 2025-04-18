/*
  Warnings:

  - Added the required column `customerId` to the `bikes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "bikes" ADD COLUMN     "customerId" TEXT NOT NULL;
