import * as dotenv from "dotenv";
import { MongoClient, Collection } from "mongodb";
import { Server } from "socket.io";
import express from "express";
import { createServer } from "http";
import cors from "cors";

dotenv.config();

const app = express();
const httpServer = createServer(app);
app.use(cors());

const URI = process.env.DB_CONNECTION_STRING;

if (!URI) {
    throw new Error("DB_CONNECTION_STRING is not set in .env file");
}

const client = new MongoClient(URI);
let jobs: Collection;

export const io = new Server(httpServer, {
    cors: {
        origin: ["http://localhost:3000"],
        methods: ["GET", "POST"],
    },
});

io.on("connection", (socket) => {
    console.log(`client id: ${socket.id}`);

    socket.on("getJobById", async (id: string) => {
        try {
            const job = await jobs.findOne({ id });
            socket.emit("jobData", job);
        } catch (err) {
            console.error("Error fetching job:", err);
            socket.emit("error", "Failed to fetch job data");
        }
    });

    socket.on("disconnect", () => {
        console.log(`Client disconnected: ${socket.id}`);
    });
});

const startServer = async () => {
    try {
        await client.connect();
        console.log("Connected successfully!");

        const database = client.db("test");
        jobs = database.collection("jobs");

        const job = await jobs.findOne({ id: "job_018" });
        console.log("Initial job query:", job?.version ?? "No job found.");

        httpServer.listen(8080, () => {
            console.log("Server running on port 8080");
        });
    } catch (err) {
        console.error("Failed to start server:", err);
        await client.close();
        process.exit(1);
    }
};

process.on("SIGINT", async () => {
    console.log("Shutting down gracefully...");
    await client.close();
    console.log("MongoDB connection closed.");
    process.exit(0);
});

startServer();
