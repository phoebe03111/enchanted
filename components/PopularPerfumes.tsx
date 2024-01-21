import prisma from "@/lib/prisma";

const getProduct = async () => {
  const data = await prisma.product.findMany({
    include: {
      categories: {
        select: {
          name: true,
        },
      },
    },
  });
  return data;
};

const PopularPerfumes = async () => {
  const data = await getProduct();
  console.log(data);

  return <div>PopularPerfumes</div>;
};

export default PopularPerfumes;
