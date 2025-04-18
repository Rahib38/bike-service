import { Request, Response } from "express";
import { customerService } from "./customer.service";

const createController = async (req: Request, res: Response) => {
  try {
    const result = await customerService.createCustomer(req.body);
    res.status(200).json({
      success: true,
      message: "Customer Created successfuly..!",
      data: result,
    });
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

const getAllCustomerFromDB = async (req: Request, res: Response) => {
  try {
    const result = await customerService.getAllCustomerFromDB();
    res.status(200).json({
      success: true,
      message: "All Customer get successfuly..!",
      data: result,
    });
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

const SingleGetAllCustomerFromDB = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await customerService.SingleGetCustomerFromDB(id);
    res.status(200).json({
      success: true,
      message: "Single Customer get successfuly..!",
      data: result,
    });
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

const updateCustomerFromDB = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    // const { data } = req.body;
    const result = await customerService.updateCustomerFromDB(id, req.body);
    res.status(200).json({
      success: true,
      message: "Customer update successfuly..!",
      data: result,
    });
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};
const deleteCustomerFromDB = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    // const { data } = req.body;
    const result = await customerService.deleteCustomerFromDB(id);
    res.status(200).json({
      success: true,
      message: "Customer delete successfuly..!",
      data: result,
    });
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};




export const customerController = {
  createController,
  getAllCustomerFromDB,
  SingleGetAllCustomerFromDB,
  updateCustomerFromDB,deleteCustomerFromDB
};
