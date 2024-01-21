import prisma from "@/lib/prisma";
import Link from "next/link";

const getProducts = async () => {
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
  const products = await getProducts();
  console.log(products);

  return (
    <section className="py-24">
      <div className="container mx-auto">
        <h2 className="text-center">Best Sellers</h2>
        <p className="text-center mb-[30px]">
          Your Favorite Perfumes In One Place.
        </p>

        {/* PopularPerfumesCarousel */}

        <Link href="/our-bikes">
          <button className="btn btn-accent mx-auto">See all perfumes</button>
        </Link>
      </div>
    </section>
  );
};
export default PopularPerfumes;
