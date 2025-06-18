/*
  Warnings:

  - The primary key for the `Board` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `boardId` on the `Board` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "imageCard" DROP CONSTRAINT "imageCard_parentBoardId_fkey";

-- AlterTable
ALTER TABLE "Board" DROP CONSTRAINT "Board_pkey",
DROP COLUMN "boardId",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Board_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "imageCard" ADD CONSTRAINT "imageCard_parentBoardId_fkey" FOREIGN KEY ("parentBoardId") REFERENCES "Board"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
