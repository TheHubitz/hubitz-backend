import mongoose from "mongoose";

import { DB_NAME } from "../constants.js";

async function connectDB() {
	try {
		const connection = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
		console.log(`Connection Host: ${connection.connection.host}`);
	}
	catch(error) {
		console.log(`MongoDB Connection Failed: ${error}`);
	}
}

export { connectDB };