import express from "express";

import { getCustomers, createCustomer, getCustomerById, deleteCustomerById, updateCustomerById, patchCustomerById } from "../controllers/customer.controller.js";

const customerRouter = express.Router();

customerRouter.get("/", getCustomers);
customerRouter.post("/", createCustomer);
customerRouter.get("/:id", getCustomerById);
customerRouter.delete("/:id", deleteCustomerById);
customerRouter.put("/:id", updateCustomerById);
customerRouter.patch("/:id", patchCustomerById);

export { customerRouter };