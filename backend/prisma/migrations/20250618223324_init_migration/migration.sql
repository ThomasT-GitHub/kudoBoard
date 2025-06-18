/*
  Warnings:

  - The primary key for the `Board` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Board` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Board" DROP CONSTRAINT "Board_pkey",
DROP COLUMN "id",
ADD COLUMN     "boardId" SERIAL NOT NULL,
ADD CONSTRAINT "Board_pkey" PRIMARY KEY ("boardId");

-- CreateTable
CREATE TABLE "imageCard" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "imageSource" TEXT NOT NULL,
    "upvotes" INTEGER NOT NULL,
    "author" TEXT,
    "parentBoardId" INTEGER NOT NULL,

    CONSTRAINT "imageCard_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "imageCard" ADD CONSTRAINT "imageCard_parentBoardId_fkey" FOREIGN KEY ("parentBoardId") REFERENCES "Board"("boardId") ON DELETE RESTRICT ON UPDATE CASCADE;
