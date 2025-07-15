-- CreateEnum
CREATE TYPE "AnswerStatus" AS ENUM ('PENDING', 'APPROVED', 'HIDDEN');

-- AlterTable
ALTER TABLE "Answer" ADD COLUMN     "status" "AnswerStatus" NOT NULL DEFAULT 'PENDING';
