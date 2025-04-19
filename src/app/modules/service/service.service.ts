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

export const serviceRecord={
    createService
}