/*
  Warnings:

  - Added the required column `imageCards` to the `Board` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Board" ADD COLUMN     "imageCards" JSONB NOT NULL;
