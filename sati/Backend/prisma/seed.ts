import { PrismaClient } from "../generated/prisma/index.js";

const prisma = new PrismaClient();

async function main() {
    // Clients
    const clients = await prisma.clients.createMany({
        data: [
            {
                id: "c1",
                company_name: "TechCorp",
                country: "USA",
                total_spent: 15000.5,
                feedback_score: 4.9,
            },
            {
                id: "c2",
                company_name: "Designify",
                country: "UK",
                total_spent: 8800.0,
                feedback_score: 4.7,
            },
            {
                id: "c3",
                company_name: "BuildIt",
                country: "Germany",
                total_spent: 10200.25,
                feedback_score: 4.5,
            },
            {
                id: "c4",
                company_name: "Startverse",
                country: "Canada",
                total_spent: 7400.0,
                feedback_score: 4.8,
            },
            {
                id: "c5",
                company_name: "NovaSoft",
                country: "India",
                total_spent: 9200.75,
                feedback_score: 4.6,
            },
        ],
    });

    // Users
    const users = await prisma.users.createMany({
        data: [
            {
                id: "u1",
                full_name: "Alice Johnson",
                title: "Full Stack Developer",
                rate: 50,
                location: "USA",
                skills: ["React", "Node.js", "PostgreSQL"],
                overview: "Experienced developer",
                email: "alice@example.com",
                profile_url: "https://example.com/alice",
                reviews: ["Great job!", "Excellent work"],
                password: "password1",
                admin: false,
            },
            {
                id: "u2",
                full_name: "Bob Smith",
                title: "Backend Engineer",
                rate: 60,
                location: "UK",
                skills: ["Go", "Docker", "Kubernetes"],
                overview: "DevOps and backend expert",
                email: "bob@example.com",
                profile_url: "https://example.com/bob",
                reviews: ["Reliable and fast"],
                password: "password2",
                admin: false,
            },
            {
                id: "u3",
                full_name: "Chloe Lee",
                title: "UI/UX Designer",
                rate: 40,
                location: "South Korea",
                skills: ["Figma", "Adobe XD"],
                overview: "Design-focused freelancer",
                email: "chloe@example.com",
                profile_url: "https://example.com/chloe",
                reviews: ["Designs are beautiful"],
                password: "password3",
                admin: false,
            },
            {
                id: "u4",
                full_name: "David Kim",
                title: "ML Engineer",
                rate: 75,
                location: "USA",
                skills: ["Python", "TensorFlow"],
                overview: "AI/ML experience",
                email: "david@example.com",
                profile_url: "https://example.com/david",
                reviews: ["Very knowledgeable"],
                password: "password4",
                admin: false,
            },
            {
                id: "u5",
                full_name: "Eve Watson",
                title: "Content Writer",
                rate: 30,
                location: "Canada",
                skills: ["SEO", "Blogging"],
                overview: "Writes technical content",
                email: "eve@example.com",
                profile_url: "https://example.com/eve",
                reviews: ["Amazing writer"],
                password: "password5",
                admin: true,
            },
        ],
    });

    // sati_users
    await prisma.sati_users.createMany({
        data: [
            { id: "s1", email: "sati1@example.com", password: "sati_pass1" },
            { id: "s2", email: "sati2@example.com", password: "sati_pass2" },
            { id: "s3", email: "sati3@example.com", password: "sati_pass3" },
            { id: "s4", email: "sati4@example.com", password: "sati_pass4" },
            { id: "s5", email: "sati5@example.com", password: "sati_pass5" },
        ],
    });

    // Jobs
    await prisma.job.createMany({
        data: [
            {
                id: "j1",
                title: "React Website",
                description: "Build a modern React website.",
                skills: ["React", "Tailwind"],
                job_type: "Fixed",
                budget: 1000,
                duration: "2 weeks",
                workload: "Part-time",
                client_id: "c1",
                user_id: "u1",
                created_at: new Date(),
                rate: 500,
            },
            {
                id: "j2",
                title: "API Development",
                description: "Develop REST APIs in Node.js.",
                skills: ["Node.js", "Express"],
                job_type: "Hourly",
                budget: 1500,
                duration: "1 month",
                workload: "Full-time",
                client_id: "c2",
                user_id: "u2",
                created_at: new Date(),
                rate: 50,
            },
            {
                id: "j3",
                title: "Landing Page Design",
                description: "Design a beautiful landing page.",
                skills: ["Figma"],
                job_type: "Fixed",
                budget: 400,
                duration: "1 week",
                workload: "Flexible",
                client_id: "c3",
                user_id: "u3",
                created_at: new Date(),
                rate: 400,
            },
            {
                id: "j4",
                title: "ML Model Training",
                description: "Train and tune an ML model.",
                skills: ["Python", "TensorFlow"],
                job_type: "Hourly",
                budget: 2000,
                duration: "2 months",
                workload: "Full-time",
                client_id: "c4",
                user_id: "u4",
                created_at: new Date(),
                rate: 70,
            },
            {
                id: "j5",
                title: "Blog Writing",
                description: "Write weekly blog posts.",
                skills: ["SEO", "WordPress"],
                job_type: "Fixed",
                budget: 300,
                duration: "1 month",
                workload: "Part-time",
                client_id: "c5",
                user_id: "u5",
                created_at: new Date(),
                rate: 300,
            },
        ],
    });

    console.log("✅ Seed data inserted");
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
