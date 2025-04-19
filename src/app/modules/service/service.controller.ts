import { Request, Response } from "express";
import { serviceRecord } from "./service.service";

const createService = async (req: Request, res: Response) => {
  try {
    const result = await serviceRecord.createService(req.body);
    res.status(200).json({
      success: true,
      message: "Service record created successfully..!",
      data: result,
    });
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

export const ServiceController ={
    createService
}