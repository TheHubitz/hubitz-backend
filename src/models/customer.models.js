import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	contact: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true
	},
	visitPurpose: {
		type: String,
		enum: ["Visit", "Desk", "Cabin"],
		required: true
	}
}, { timestamps: true });

const Customer = mongoose.model("Customer", customerSchema);

export { Customer };