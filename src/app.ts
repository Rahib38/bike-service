import cors from "cors";
import express, { Application, Request, Response } from "express";
import router from "./app/modules/customer/customer.routes";

const app: Application = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api',router)

app.get("/", (req: Request, res: Response) => {
  res.send({
    Message: "Bike Service Server..",
  });
});

export default app