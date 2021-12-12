-- CreateEnum
CREATE TYPE "Difficulty" AS ENUM ('EASY', 'MEDIUM', 'HARD');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('DRAFT', 'PUBLISH');

-- CreateTable
CREATE TABLE "BlogTag" (
    "id" INTEGER NOT NULL,
    "tagID" INTEGER NOT NULL,
    "blogID" INTEGER NOT NULL,

    CONSTRAINT "BlogTag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Blog" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "difficulty" "Difficulty" NOT NULL DEFAULT E'EASY',
    "status" "Status" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "BlogTag_id_key" ON "BlogTag"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Blog_id_key" ON "Blog"("id");

-- AddForeignKey
ALTER TABLE "BlogTag" ADD CONSTRAINT "BlogTag_tagID_fkey" FOREIGN KEY ("tagID") REFERENCES "Tag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BlogTag" ADD CONSTRAINT "BlogTag_blogID_fkey" FOREIGN KEY ("blogID") REFERENCES "Blog"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
