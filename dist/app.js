"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const customer_routes_1 = __importDefault(require("./app/modules/customer/customer.routes"));
const bike_routes_1 = __importDefault(require("./app/modules/bike/bike.routes"));
const globalErrorhandleing_1 = __importDefault(require("./app/middleware/globalErrorhandleing"));
const service_routes_1 = __importDefault(require("./app/modules/service/service.routes"));
const notFound_1 = __importDefault(require("./shared/notFound"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/api', customer_routes_1.default);
app.use('/api', bike_routes_1.default);
app.use('/api', service_routes_1.default);
app.use(globalErrorhandleing_1.default);
app.use(notFound_1.default);
app.get("/", (req, res) => {
    res.send({
        Message: "Bike Service Server..",
    });
});
exports.default = app;
