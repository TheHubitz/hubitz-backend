import mongoose from "mongoose";

import { Customer } from "../models/customer.models.js";

async function getCustomers(request, response) {
	try {
		const customers = await Customer.find();
		return response.status(200).json({
			"success": true,
			"data": customers
		});
	}
	catch(error) {
		return response.status(404).json({
			"success": false,
			"error": error
		});
	}
}

async function createCustomer(request, response) {
	try{
		const { name, contact, email, visitPurpose } = request.body;

		if(!name || !contact || !email || !visitPurpose) {
			return response.status(400).json({
				"success": false,
				"error": "Required fields missing"
			});
		}

		const exists = await Customer.findOne({ email: email });
		if(exists) {
			return response.status(400).json({
				"success": false,
				"error": "User with this email already exists"
			});
		}

		const newCustomer = new Customer({ name, contact, email, visitPurpose });
		await newCustomer.save();

		return response.status(201).json({
			"success": true,
			"data": newCustomer
		});
	}
	catch(error) {
		return response.status(500).json({
			"success": false,
			"error": error
		});
	}
}

async function getCustomerById(request, response) {
	try {
		const { id } = request.params;
		
		const customer = await Customer.findById(id);

		if(!customer) {
			return response.status(404).json({
				"success": false,
				"error": "Customer with Id doesn't exist"
			});
		}

		return response.status(200).json({
			"success": true,
			"data": customer
		});
	}
	catch(error) {
		return response.status(500).json({
			"success": false,
			"error": error
		});
	}
}

async function deleteCustomerById(request, response) {
	try {
		const { id } = request.params;
		
		const customer = await Customer.findByIdAndDelete(id);

		if(!customer) {
			return response.status(404).json({
				"success": false,
				"error": "Customer with Id doesn't exist"
			});
		}

		return response.status(200).json({
			"success": true,
			"data": customer
		});
	}
	catch(error) {
		return response.status(500).json({
			"success": false,
			"error": error
		});
	}
}

async function updateCustomerById(request, response) {
	// TODO
}

async function patchCustomerById(request, response) {
	// TODO
}

export {
	getCustomers,
	createCustomer,
	getCustomerById,
	deleteCustomerById,
	updateCustomerById,
	patchCustomerById
};