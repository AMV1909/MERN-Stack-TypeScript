import { connect } from "mongoose";
import { config } from "dotenv";

config();

const db = connect(process.env.MONGODB_URI)
    .then(() => console.log("Database is connected"))
    .catch((err) => console.error(err));

export { db };
