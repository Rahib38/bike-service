/*
  Warnings:

  - Added the required column `bikeId` to the `services` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "services" DROP CONSTRAINT "services_serviceId_fkey";

-- AlterTable
ALTER TABLE "services" ADD COLUMN     "bikeId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "services" ADD CONSTRAINT "services_bikeId_fkey" FOREIGN KEY ("bikeId") REFERENCES "bikes"("bikeId") ON DELETE RESTRICT ON UPDATE CASCADE;
