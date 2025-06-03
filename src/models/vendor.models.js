import mongoose from "mongoose";

const vendorSchema = new mongoose.Schema({
	name: { 
		type: String, 
		required: true 
	},
	email: { 
		type: String, 
		required: true, 
		unique: true 
	},
	phone: {
		type: String,
		required: true
	},
	businessName: {
		type: String
	},
	address: {
		type: String
	},
	isVerified: { 
		type: Boolean, 
		default: false 
	},
}, { timestamps: true});

const Vendor = mongoose.Model("Vendor", vendorSchema);

export { Vendor };