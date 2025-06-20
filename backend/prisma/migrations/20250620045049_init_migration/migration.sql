-- CreateTable
CREATE TABLE "Board" (
    "id" SERIAL NOT NULL,
    "imageSource" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "author" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Board_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ImageCard" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "imageSource" TEXT NOT NULL,
    "upvotes" INTEGER NOT NULL DEFAULT 0,
    "author" TEXT,
    "parentBoardId" INTEGER NOT NULL,

    CONSTRAINT "ImageCard_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ImageCard" ADD CONSTRAINT "ImageCard_parentBoardId_fkey" FOREIGN KEY ("parentBoardId") REFERENCES "Board"("id") ON DELETE CASCADE ON UPDATE CASCADE;
