import prisma from "@/lib/prisma";
import Link from "next/link";
import PopularPerfumesCarousel from "./PopularPerfumesCarousel";

export const getProducts = async () => {
  const data = await prisma.product.findMany({
    include: {
      categories: true,
    },
  });
  return data;
};

const PopularPerfumes = async () => {
  const products = await getProducts();

  return (
    <section className="py-8">
      <div className="container mx-auto">
        <h2 className="text-center">Best Sellers</h2>
        <p className="text-center mb-[30px]">
          Your Favorite Perfumes In One Place.
        </p>

        <PopularPerfumesCarousel products={products} />

        <Link href="/our-perfumes">
          <button className="btn btn-accent mx-auto">See all perfumes</button>
        </Link>
      </div>
    </section>
  );
};
export default PopularPerfumes;
