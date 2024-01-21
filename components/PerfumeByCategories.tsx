"use client";

import { useEffect, useState } from "react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { Slider } from "./ui/slider";

import Perfume, { ProductWithCategory } from "./Perfume";

interface PerfumeByCategoriesProps {
  products: ProductWithCategory[];
}

const PerfumeByCategories = ({ products }: PerfumeByCategoriesProps) => {
  const [category, setCategory] = useState<string>("all");
  const [filteredProducts, setFilteredProducts] = useState<
    ProductWithCategory[]
  >([]);
  const [price, setPrice] = useState<number>(500);

  useEffect(() => {
    const filtered = products.filter((product) => {
      const categoryMatch =
        category === "all"
          ? products
          : product.categories.some((cat) => cat.name === category);
      const priceMatch = product.price <= price;
      return categoryMatch && priceMatch;
    });

    setFilteredProducts(filtered);
  }, [category, price, products]);

  return (
    <section className="min-h-[1200px] py-10">
      <div className="container mx-auto">
        <div className="flex flex-col">
          {/* sidebar */}
          <aside className="w-full p-4 mb-8 xl:w-[300px] xl:h-[84vh] xl:fixed">
            <RadioGroup
              defaultValue="all"
              className="flex flex-col gap-6 mb-12"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="all"
                  id="all"
                  onClick={() => setCategory("all")}
                />
                <Label htmlFor="all">All</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="woody"
                  id="woody"
                  onClick={() => setCategory("woody")}
                />
                <Label htmlFor="woody">Woody</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="floral"
                  id="floral"
                  onClick={() => setCategory("floral")}
                />
                <Label htmlFor="floral">Floral</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="fruity"
                  id="fruity"
                  onClick={() => setCategory("fruity")}
                />
                <Label htmlFor="fruity">Fruity</Label>
              </div>
            </RadioGroup>

            {/* price slider */}
            <div className="max-w-56">
              <div className="text-lg mb-4 font-medium">
                Max Price:{" "}
                <span className="text-accent font-semibold ml-2">${price}</span>
                <span className="ml-2">{filteredProducts.length} items</span>
              </div>
              <Slider
                defaultValue={[500]}
                max={600}
                step={1}
                onValueChange={(value) => setPrice(value[0])}
              />
            </div>
          </aside>

          {/* Perfume list */}
          <div className="w-full xl:w-[1050px] ml-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px]">
              {filteredProducts.map((product) => (
                <Perfume key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerfumeByCategories;
