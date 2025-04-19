import { Request, Response } from "express";
import status from "http-status";
import sendResponse from "../../../shared/sendResponse";
import { serviceRecord } from "./service.service";

const createService = async (req: Request, res: Response) => {
  const result = await serviceRecord.createService(req.body);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Service record created successfully..!",

    data: result,
  });
};

const getAllServiceFromDB = async (req: Request, res: Response) => {
  const result = await serviceRecord.getAllServiceFromDB();
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Service records fetched successfully..!",

    data: result,
  });
};

const SingleGetServiceFromDB = async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await serviceRecord.SingleGetServiceFromDB(id);
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
  const result = await serviceRecord.updateServiceFromDB(id, req.body);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Service marked as completed",

    data: result,
  });
};

export const ServiceController = {
  createService,getAllServiceFromDB,SingleGetServiceFromDB,updateServiceFromDB
};
