import prisma from "@/lib/prisma";
import { Product } from "@prisma/client";
import {
  ChevronLeft,
  Clock,
  PackageCheck,
  RefreshCw,
  SprayCan,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

const getProductDetail = async (productId: string) => {
  const data = await prisma.product.findUnique({
    where: {
      id: productId,
    },
    include: {
      categories: true,
    },
  });
  return data;
};

interface ProductDetailPageProps {
  params: {
    productId: string;
  };
}

const ProductDetailPage = async ({ params }: ProductDetailPageProps) => {
  const product = await getProductDetail(params.productId);

  if (!product) return redirect("/");

  return (
    <section className="pt-24 pb-32">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-14">
          {/* img */}
          <div className="xl:flex-1 h-[460px] bg-primary/5 xl:w-[700px] xl:h-[540px] flex justify-center items-center">
            <Image
              src={product.image}
              width={473}
              height={290}
              priority
              alt={product.name}
            />
          </div>
          {/* text */}
          <div className="flex-1 flex flex-col justify-center items-start gap-10">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <ChevronLeft size={20} />
              Back to home
            </Link>
            <div className="flex flex-col gap-6 items-start">
              <div>
                <h3>{product.name}</h3>
                <p>{product.brand}</p>
                <p className="text-lg font-semibold mt-2">
                  ${product.price}{" "}
                  <span className="text-primary ml-2 text-base">({product.size})</span>
                </p>
              </div>
              {/* <AddToCartBtn
                price_id={bike.price_id}
                name={bike.name}
                currency="CAD"
                description={bike.description}
                images={bike.images}
                price={bike.price}
                text="Add to cart"
                btnStyles="btn btn-accent"
              /> */}
            </div>
            {/* info */}
            <div className="flex flex-col gap-3">
              <div className="flex gap-2">
                <PackageCheck size={20} className="text-accent" />
                <p>Free shipping on orders over $130</p>
              </div>
              <div className="flex gap-2">
                <RefreshCw size={20} className="text-accent" />
                <p>Free return for 30 days</p>
              </div>
              <div className="flex gap-2">
                <Clock size={20} className="text-accent" />
                <p>Fast delivery</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailPage;
