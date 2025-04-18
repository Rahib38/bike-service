import { Request, Response } from "express";
import { bikeService } from "./bike.service";

const createBike = async (req: Request, res: Response) => {
  try {
    const result = await bikeService.createBike(req.body);
    res.status(200).json({
      success: true,
      message: "Bike added successfully..!",
      data: result,
    });
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};



export const bikeController ={
    createBike
}