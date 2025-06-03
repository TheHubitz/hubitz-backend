import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
	vendorId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Vendor"
	},
	customerId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Customer"
	},
	mode: {
		type: String,
		required: true,
		enum: ["Offline", "Online"],
	},
	source: {
		type: String,
		required: true,
		enum: ["Website", "HQ", "App", "The Hubitz", "Offline"]
	},
	bookingTime: {
		type: Date,
		required: true,
		default: Date.now
	},
	status: {
		type: String,
		required: true,
		enum: ["Confirmed", "Pending", "Cancelled"],
		default: "Pending"
	},
	amount: {
		type: Number,
		required: true,
		min: 100,
		default: 100
	}
}, { timestamps: true });

const Booking = mongoose.model("Booking", bookingSchema);

export { Booking };