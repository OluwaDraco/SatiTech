// import express from "express";
// import type { Request, Response } from "express";

// import { con } from "./server.ts";
// //remove
// import { fileURLToPath } from "url";
// import { dirname } from "path";
// import fs from "fs";
// import path from "path";
// const app = express();
// app.use(express.json());
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);
// const usersFilePath = path.join(__dirname, "mock_data_user.json");

// app.post("/create-user", (req: Request, res: Response) => {
//     console.log("created");
// });

// app.post("/retrieve-user", (req: Request, res: Response) => {
//     fs.readFile(usersFilePath, "utf-8", (err, data) => {
//         if (err) {
//             console.error(err);
//             return res.status(500).send("Failed to read users file.");
//         }
//         const users = JSON.parse(data);
//         const {
//             id,
//             full_name,
//             title,
//             rate,
//             location,
//             skills,
//             overview,
//             admin,
//             email,
//             profile_url,
//             reviews,
//         } = users;

//         const insert_query = `
//         INSERT INTO freelancers (
//             id, full_name, title, rate, location, skills, overview, admin, email, profile_url, reviews
//         ) VALUES (
//             $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11
//         )
//     `;

//         const values = [
//             id,
//             full_name,
//             title,
//             rate,
//             location,
//             skills,
//             overview,
//             admin,
//             email,
//             profile_url,
//             reviews,
//         ];

//         con.query(insert_query, values, (err: any, result: any) => {
//             if (err) {
//                 res.send(err);
//             } else {
//                 console.log(result);
//                 res.send("data posted");
//             }
//         });
//     });
// });

// app.post("/test", (req: any, res: any) => {
//     const { id, full_name } = req.body;
//     const insert_query = "INSERT INTO test (full_name,id) VALUES ($1,$2)";
//     con.query(insert_query, [full_name, id], (err: any, result: any) => {
//         if (err) {
//             res.send(err);
//         } else {
//             console.log(result);
//             res.send("data posted");
//         }
//     });
// });

// app.get("/users", (req: Request, res: Response) => {
//     fs.readFile(usersFilePath, "utf-8", (err, data) => {
//         if (err) {
//             console.error(err);
//             return res.status(500).send("Failed to read users file.");
//         }
//         const users = JSON.parse(data);
//         res.json(users);
//     });
// });

// const PORT = 8080;

// app.listen(PORT, () => {
//     console.log(`listening  on port:${PORT} `);
// });

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
    // ... you will write your Prisma Client queries here
    // await prisma.users.create({
    //     data: {
    //         full_name: "olushola oludipe",
    //         title: "Software Developer",
    //         rate: 25.0,
    //         location: "USA",
    //         skills: ["java", "typescript", "python"],
    //         overview: "this is a test",
    //         admin: true,
    //         email: "shotown@gmail.com",
    //         profile_url: "http://example.com",
    //         reviews: ["a good work"],
    //         password: "sholaisgood",
    //         jobs:{

    //         }
    //     },
    // });
    // const user = await prisma.users.findUnique({
    //     where: {
    //         id: "user1",
    //     },
    // });
    // console.log(user);
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
