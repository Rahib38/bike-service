import cors from "cors";
import express, { Application, Request, Response } from "express";
import globalErrorHandler from "./app/middleware/globalErrorhandleing";
import bikeRouter from "./app/modules/bike/bike.routes";
import { customerRouter } from "./app/modules/customer/customer.routes";
import serviceRouter from "./app/modules/service/service.routes";
import notFound from "./shared/notFound";

const app: Application = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", customerRouter);
app.use("/api", bikeRouter);
app.use("/api", serviceRouter);

app.get("/", (req: Request, res: Response) => {
  res.send({
    Message: "Bike Service Server..",
  });
});
app.use(globalErrorHandler);

app.use(notFound);


export default app;
