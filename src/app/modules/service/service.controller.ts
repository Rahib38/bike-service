import { Request, Response } from "express";
import status from "http-status";
import sendResponse from "../../../shared/sendResponse";
import { serviceRecords } from "./service.service";

const createService = async (req: Request, res: Response) => {
  const result = await serviceRecords.createService(req.body);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Service record created successfully..!",

    data: result,
  });
};

const getAllServiceFromDB = async (req: Request, res: Response) => {
  const result = await serviceRecords.getAllServiceFromDB();
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Service records fetched successfully..!",

    data: result,
  });
};

const SingleGetServiceFromDB = async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await serviceRecords.SingleGetServiceFromDB(id);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Service record fetched successfully..!",

    data: result,
  });
};

const updateServiceFromDB = async (req: Request, res: Response) => {
  const { id } = req.params;
  // const { data } = req.body;
  const result = await serviceRecords.updateServiceFromDB(id, req.body);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Service marked as completed",

    data: result,
  });
};

const getpendingOrOverdueServices = async (req: Request, res: Response) => {
  const result = await serviceRecords.getpendingOrOverdueServices();
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Overdue or pending services fetched successfully..!",

    data: result,
  });
};

export const ServiceController = {
  createService,getAllServiceFromDB,SingleGetServiceFromDB,updateServiceFromDB,getpendingOrOverdueServices
};
