import mongoose from "mongoose";

import { Customer } from "../models/customer.models.js";

async function getCustomers(request, response) {
	response.status(200).json({
		"message": "testing"
	});
}

async function createCustomer(request, response) {
	response.status(500).json({
		"message": "testing"
	});
}

async function getCustomerById(request, response) {
	response.status(404).json({
		"message": "testing"
	});
}

async function deleteCustomerById(request, response) {
	response.status(200).json({
		"message": "testing"
	});
}

async function updateCustomerById(request, response) {
	response.status(201).json({
		"message": "testing"
	});
}

async function patchCustomerById(request, response) {
	response.status(203).json({
		"message": "testing"
	});
}

export {
	getCustomers,
	createCustomer,
	getCustomerById,
	deleteCustomerById,
	updateCustomerById,
	patchCustomerById
};