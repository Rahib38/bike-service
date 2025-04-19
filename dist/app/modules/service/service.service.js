"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceRecords = void 0;
const prisma_1 = require("../../../generated/prisma");
const prisma_2 = __importDefault(require("../../../shared/prisma"));
const createService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const userData = {
        serviceDate: data.serviceDate,
        description: data.description,
        status: data.ServiceStatus,
        bike: {
            connect: {
                bikeId: data.bikeId,
            },
        },
    };
    console.log(data);
    const result = yield prisma_2.default.$transaction((transactionClient) => __awaiter(void 0, void 0, void 0, function* () {
        const createServiceData = yield transactionClient.serviceRecord.create({
            data: userData,
        });
        return createServiceData;
    }));
    return result;
});
const getAllServiceFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_2.default.serviceRecord.findMany();
    return result;
});
const SingleGetServiceFromDB = (serviceId) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(serviceId);
    const result = yield prisma_2.default.serviceRecord.findUnique({
        where: {
            serviceId,
        },
    });
    return result;
});
const updateServiceFromDB = (serviceId, data) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("data", serviceId, data);
    if (data.completionDate) {
        data.status = prisma_1.ServiceStatus.done;
    }
    const result = yield prisma_2.default.serviceRecord.update({
        where: {
            serviceId,
        },
        data,
    });
    return result;
});
const getpendingOrOverdueServices = () => __awaiter(void 0, void 0, void 0, function* () {
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    const result = yield prisma_2.default.serviceRecord.findMany({
        where: {
            status: {
                in: [prisma_1.ServiceStatus.pending, prisma_1.ServiceStatus.in_progress],
            },
            serviceDate: {
                lt: sevenDaysAgo,
            },
        },
    });
    return result;
});
exports.serviceRecords = {
    createService,
    getAllServiceFromDB,
    SingleGetServiceFromDB,
    updateServiceFromDB,
    getpendingOrOverdueServices,
};
