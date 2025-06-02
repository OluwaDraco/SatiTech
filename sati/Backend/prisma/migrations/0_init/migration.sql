-- CreateTable
CREATE TABLE "client" (
    "id" TEXT NOT NULL,
    "company_name" TEXT,
    "country" TEXT,
    "total_spent" DECIMAL,
    "feedback_score" DECIMAL,

    CONSTRAINT "client_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "jobs" (
    "id" TEXT NOT NULL,
    "title" TEXT,
    "description" TEXT,
    "skills" TEXT[],
    "job_type" TEXT,
    "budget" DECIMAL,
    "duration" TEXT,
    "workload" TEXT,
    "client_id" TEXT,
    "created_at" TIMESTAMP(6),
    "rate" MONEY,
    "user_id" TEXT,

    CONSTRAINT "jobs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sati_users" (
    "id" TEXT NOT NULL,
    "email" TEXT,
    "password" TEXT,

    CONSTRAINT "sati_users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "test" (
    "id" TEXT NOT NULL,
    "full_name" TEXT,

    CONSTRAINT "test_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "full_name" TEXT,
    "title" TEXT,
    "rate" DECIMAL,
    "location" TEXT,
    "skills" TEXT[],
    "overview" TEXT,
    "admin" BOOLEAN,
    "email" TEXT,
    "profile_url" TEXT,
    "reviews" TEXT[],
    "password" TEXT,

    CONSTRAINT "freelancers_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "jobs" ADD CONSTRAINT "jobs_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "client"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "jobs" ADD CONSTRAINT "jobs_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

