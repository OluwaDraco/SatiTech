import * as dotenv from "dotenv";
import { MongoClient, Collection } from "mongodb";
import { Server, Socket } from "socket.io";
import express from "express";
import { createServer } from "http";
import cors from "cors";
import { ClientToServerEvents, ServerToClientEvents } from "../types/types";
import { Job } from "../types/jobType";

dotenv.config();

const app = express();
const httpServer = createServer(app);
app.use(cors());

const URI = process.env.DB_CONNECTION_STRING;

if (!URI) {
    throw new Error("DB_CONNECTION_STRING is not set in .env file");
}

const client = new MongoClient(URI);

export const io = new Server<ClientToServerEvents, ServerToClientEvents>(
    httpServer,
    {
        cors: {
            origin: ["http://localhost:3000"],
            methods: ["GET", "POST"],
        },
    }
);

io.on(
    "connection",
    (socket: Socket<ClientToServerEvents, ServerToClientEvents>) => {
        socket.on("clientMsg", async () => {
            try {
                await client.connect();
                console.log("socket successfully Connected to db");

                const database = client.db("test");
                const jobsCollections: Collection<Job> =
                    database.collection("jobs");

                const jobs: Job[] = await jobsCollections
                    .find({})
                    .map((doc) => ({
                        ...doc,
                        _id: doc._id.toString(), // Convert ObjectId to string if needed
                    }))
                    .toArray();
                console.log(jobs[0]);
                socket.emit("serverMsg", { jobs });
            } catch (err) {
                console.log(err);
            }
        });

        socket.on("disconnect", () => {
            console.log(`Client disconnected: ${socket.id}`);
        });
    }
);

const startServer = async () => {
    try {
        await client.connect();
        console.log("Connected successfully!");

        const database = client.db("test");
        const jobsCollections: Collection<Job> = database.collection("jobs");
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
