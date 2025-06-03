import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	countryCode: {
		type: Number,
		required: true,
		default: 91
	},
	contact: {
		type: Number,
		required: true,
	},
	email: {
		type: String,
		required: false
	},
	visitPurpose: {
		type: String,
		enum: ["Visit", "Desk", "Cabin"],
		default: "Visit"
	}
}, { timestamps: true });

const Customer = mongoose.model("Customer", customerSchema);

export { Customer };