import { PrismaClient } from "./generated/prisma";

const prisma = new PrismaClient();

async function main() {
    await prisma.clients.create({
        data: {
            id: "client1",
            company_name: "shotown",
            country: "USA",
            total_spent: 3000.24,
            feedback_score: 4.5,
            jobs: {
                create: [
                    {
                        id: "job_301",
                        title: "Fullstack Developer",
                        description: "Build and maintain fullstack web apps.",
                        skills: ["React", "Node.js"],
                        job_type: "Full-time",
                        budget: 3000.0,
                        duration: "1 month",
                        workload: "40 hrs/week",
                        rate: 90.0,
                        created_at: new Date(),
                        user_id: null, // Optional
                    },
                    {
                        id: "job_302",
                        title: "UX/UI Designer",
                        description: "Redesign our SaaS product interface.",
                        skills: ["Figma", "UX Research"],
                        job_type: "Freelance",
                        budget: 1200.0,
                        duration: "2 weeks",
                        workload: "10 hrs/week",
                        rate: 65.0,
                        created_at: new Date(),
                        user_id: null, // Optional
                    },
                ],
            },
        },
    });
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
