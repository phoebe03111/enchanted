import PerfumeByCategories from "@/components/PerfumeByCategories";
import { getProducts } from "@/components/PopularPerfumes";

const OurPerfumesPage = async () => {
  const products = await getProducts();

  return (
    <div>
      <PerfumeByCategories products={products} />
    </div>
  );
};

export default OurPerfumesPage;
