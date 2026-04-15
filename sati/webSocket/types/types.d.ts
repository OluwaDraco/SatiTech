import { Job } from "./jobType";
export interface ServerToClientEvents {
    serverMsg: (data: { jobs: Job[] }) => void;
}

export interface ClientToServerEvents {
    clientMsg: () => void;
}
