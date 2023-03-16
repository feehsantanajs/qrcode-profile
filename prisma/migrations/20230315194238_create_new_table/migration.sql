-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "linkedin" TEXT NOT NULL,
    "github" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "User_linkedin_key" ON "User"("linkedin");

-- CreateIndex
CREATE UNIQUE INDEX "User_github_key" ON "User"("github");

-- CreateIndex
CREATE UNIQUE INDEX "User_slug_key" ON "User"("slug");
