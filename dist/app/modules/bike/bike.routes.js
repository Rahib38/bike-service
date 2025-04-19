"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bike_controller_1 = require("./bike.controller");
const bikeRouter = express_1.default.Router();
bikeRouter.post('/bikes', bike_controller_1.bikeController.createBike);
bikeRouter.get('/bikes', bike_controller_1.bikeController.getAllBikeFromDB);
bikeRouter.get('/bikes/:id', bike_controller_1.bikeController.SingleGetAllBikeFromDB);
exports.default = bikeRouter;
