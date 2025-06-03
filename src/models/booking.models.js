import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
	vendorId: { 
		type: mongoose.Schema.Types.ObjectId, 
		ref: "Vendor", 
		required: true 
	},
	customerId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Customer"
	},
	type: { 
		type: String, 
		enum: ["offline", "online"], 
		required: true 
	},
	platform: { 
		type: String, 
		enum: ["Website/App", "myHQ", "The Hubitz", "Other"], 
		required: true 
	},
	bookingDetails: {
		spaceType: { 
			type: String, 
			enum: ["Desk", "Cabin", "Meeting Room", "Studio"], 
			required: true 
		},
		date: Date,
		durationHours: Number
	},
	status: { 
		type: String, 
		enum: ["pending", "confirmed", "cancelled"], 
		default: "pending" 
	},
}, { timestamps: true });

const Booking = mongoose.model("Booking", bookingSchema);

export { Booking };