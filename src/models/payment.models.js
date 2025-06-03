import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
	vendorId: { 
		type: mongoose.Schema.Types.ObjectId, 
		ref: "Vendor", 
		required: true 
	},
	bookingId: { 
		type: mongoose.Schema.Types.ObjectId, 
		ref: "Booking" 
	},
	method: { 
		type: String, 
		enum: ["Cash", "Cheque", "UPI", "Card", "Online banking"], 
		required: true 
	},
	gateway: { 
		type: String, 
		enum: ["Razorpay", "Cash/Cheque"], 
		default: "Cash/Cheque" 
	},
	couponCode: {
		type: String
	},
	amount: {
		type: Number
	},
	paymentDone: { 
		type: Boolean, 
		default: false 
	},
	settledByCoupon: { 
		type: Boolean, 
		default: false 
	},
}, { timestamps: true });

const Payment = mongoose.Model("Payment", paymentSchema);

export { Payment };