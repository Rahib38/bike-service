import { Request, Response } from "express";
import status from "http-status";
import sendResponse from "../../../shared/sendResponse";
import { bikeService } from "./bike.service";

const createBike = async (req: Request, res: Response) => {
  const result = await bikeService.createBike(req.body);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Bike added successfully..!",

    data: result,
  });
};

const getAllBikeFromDB = async (req: Request, res: Response) => {
  const result = await bikeService.getAllBikeFromDB();
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Bikes fetched successfully..!",

    data: result,
  });
};

const SingleGetAllBikeFromDB = async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await bikeService.SingleGetBikeFromDB(id);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Bike fetched successfully..!",

    data: result,
  });
};

export const bikeController = {
  createBike,
  getAllBikeFromDB,
  SingleGetAllBikeFromDB,
};
