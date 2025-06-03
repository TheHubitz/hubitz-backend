import dotenv from "dotenv";

import { connectDB } from "./database/connection.js";
import { app } from "./app.js";

dotenv.config();

connectDB()
	.then(() => {
		app.listen(process.env.PORT, () => {
			console.log(`App is listening on localhost:${process.env.PORT}`);
		});
	})
	.catch((error) => {
		console.log(`MongoDB Connection Failed: ${error}`);
	})
	.finally();