/*
  Warnings:

  - You are about to drop the column `name` on the `services` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `services` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "services" DROP COLUMN "name",
DROP COLUMN "phone",
ALTER COLUMN "completionDate" DROP NOT NULL;
