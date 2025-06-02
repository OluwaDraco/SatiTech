import { Pool } from "pg";
export const con = new Pool({
    host: "localhost",
    user: "shola",
    port: 5432,
    // change to env file
    password: "shola1",
    database: "upwork_data",
});
con.connect().then(() => console.log("connected"));
