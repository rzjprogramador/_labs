-- CreateTable
CREATE TABLE "users" (
    "idb" TEXT NOT NULL,
    "id" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "identificador" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3),
    "updatedAt" TIMESTAMP(3),
    "utimoLogin" TIMESTAMP(3),

    CONSTRAINT "users_pkey" PRIMARY KEY ("idb")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE INDEX "users_email_idx" ON "users"("email");
