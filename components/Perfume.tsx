"use client";

import { Prisma } from "@prisma/client";
import { Eye, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface PerfumeProps {
  product: ProductWithCategory;
}

export type ProductWithCategory = Prisma.ProductGetPayload<{
  include: { categories: true };
}>;

const Perfume = ({ product }: PerfumeProps) => {
  const popularPerfumes = product.categories.find(
    (cat) => cat.name === "popular"
  );

  return (
    <div className="group">
      <div className="border h-[328px] mb-5 p-4 overflow-hidden relative">
        <div className="bg-primary/5 w-full h-full group-hover:bg-primary/10 transition-all duration-300 flex justify-center items-center">
          {/* badge */}
          {popularPerfumes && (
            <div className="absolute top-8 left-8 bg-accent text-white px-3 text-sm uppercase font-medium">
              popular
            </div>
          )}
          <Image
            src={product.image}
            alt={product.name}
            width={240}
            height={147}
          />
        </div>

        {/* Buttons */}
        <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center gap-[10px] opacity-0 group-hover:opacity-100 transition-all duration-300">
          <Link href={`/product/${product.id}`}>
            <button className="btn-icon btn-primary">
              <ShoppingBag />
            </button>
          </Link>
          <Link href={`/product/${product.id}`}>
            <button className="btn-icon btn-primary">
              <Eye />
            </button>
          </Link>
        </div>
      </div>

      <h5 className="text-gray-400 font-semibold mb-2">
        {product.categories
          .filter((cat) => cat.name !== "popular")
          .map((cat) => cat.name)
          .join("/")}{" "}
        scent
      </h5>
      <h4 className="mb-0 text-base">{product.brand}</h4>
      <h4 className="mb-2 font-normal">{product.name}</h4>
      <div className="text-lg font-bold text-accent">${product.price}</div>
    </div>
  );
};

export default Perfume;
