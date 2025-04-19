import { Request, Response } from "express";
import status from "http-status";
import sendResponse from "../../../shared/sendResponse";
import { customerService } from "./customer.service";

const createController = async (req: Request, res: Response) => {
  const result = await customerService.createCustomer(req.body);
  // console.log(result)
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Create customer successfuly..!",
    data: result,
  });
};

const getAllCustomerFromDB = async (req: Request, res: Response) => {
  const result = await customerService.getAllCustomerFromDB();
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Customers fetched successfully..!",

    data: result,
  });
};

const SingleGetAllCustomerFromDB = async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await customerService.SingleGetCustomerFromDB(id);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Customer fetched successfully..!",

    data: result,
  });
};

const updateCustomerFromDB = async (req: Request, res: Response) => {
  const { id } = req.params;
  // const { data } = req.body;
  const result = await customerService.updateCustomerFromDB(id, req.body);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Customer updated successfully..!",

    data: result,
  });
};

const deleteCustomerFromDB = async (req: Request, res: Response) => {
  const { id } = req.params;
  // const { data } = req.body;
  await customerService.deleteCustomerFromDB(id);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Customer deleted successfully..!",
  });
};

export const customerController = {
  createController,
  getAllCustomerFromDB,
  SingleGetAllCustomerFromDB,
  updateCustomerFromDB,
  deleteCustomerFromDB,
};
