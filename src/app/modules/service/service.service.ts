import { ServiceRecord, ServiceStatus } from "../../../generated/prisma";
import prisma from "../../../shared/prisma";

const createService = async (data: any) => {
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
  const result = await prisma.$transaction(async (transactionClient) => {
    const createServiceData = await transactionClient.serviceRecord.create({
      data: userData,
    });
    return createServiceData;
  });
  return result;
};

const getAllServiceFromDB = async () => {
  const result = await prisma.serviceRecord.findMany();
  return result;
};

const SingleGetServiceFromDB = async (
  serviceId: string
): Promise<ServiceRecord | null> => {
  console.log(serviceId);
  const result = await prisma.serviceRecord.findUnique({
    where: {
      serviceId,
    },
  });
  return result;
};

const updateServiceFromDB = async (
  serviceId: string,
  data: Partial<ServiceRecord>
): Promise<ServiceRecord | null> => {
  console.log("data", serviceId, data);
  if (data.completionDate) {
    data.status = ServiceStatus.done;
  }

  const result = await prisma.serviceRecord.update({
    where: {
      serviceId,
    },
    data,
  });

  return result;
};

const getpendingOrOverdueServices = async () => {
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

  const result = await prisma.serviceRecord.findMany({
    where: {
      status: {
        in: [ServiceStatus.pending, ServiceStatus.in_progress],
      },
      serviceDate: {
        lt: sevenDaysAgo,
      },
    },
  });
  return result;
};

export const serviceRecords = {
  createService,
  getAllServiceFromDB,
  SingleGetServiceFromDB,
  updateServiceFromDB,
  getpendingOrOverdueServices,
};
