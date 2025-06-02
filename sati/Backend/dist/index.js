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
console.log("hello");
