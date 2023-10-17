/*
  Warnings:

  - You are about to drop the column `createdAt` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `product` DROP COLUMN `createdAt`,
    DROP COLUMN `updatedAt`,
    ADD COLUMN `createAt` TIMESTAMP(0) NOT NULL DEFAULT (0000-00-00 00:00:00),
    ADD COLUMN `updateAt` TIMESTAMP(0) NOT NULL DEFAULT (0000-00-00 00:00:00);
