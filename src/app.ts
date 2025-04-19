import cors from "cors";
import express, { Application, NextFunction, Request, Response } from "express";
import router from "./app/modules/customer/customer.routes";
import bikeRouter from "./app/modules/bike/bike.routes";
import globalErrorHandler from "./app/middleware/globalErrorhandleing";
import status from "http-status";
import serviceRouter from "./app/modules/service/service.routes";

const app: Application = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api',router)
app.use('/api',bikeRouter)
app.use('/api',serviceRouter)

app.use(globalErrorHandler)

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(status.NOT_FOUND).json({
    success: false,
    message: "Api Not Found!",
    error: {
      path: req.originalUrl,
      message: "Your requested path is not found!",
    },
  });
});

app.get("/", (req: Request, res: Response) => {
  res.send({
    Message: "Bike Service Server..",
  });
});

export default app