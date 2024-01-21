import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="py-48 md:py-0 md:h-[820px] relative overflow-hidden bg-primary/5">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* text */}
          <div className="w-full xl:max-x-[580px] md:h-[820px] flex flex-col justify-center items-start">
            <h2 className="text-center xl:text-left mb-6">
              Where Elegance Meets Enchantment
              <br />
              in Every Scent
            </h2>
            <p className="mb-10 text-lg max-w-[508px] mx-auto text-center xl:text-left xl:mx-0">
              Immerse yourself in a world of captivating fragrances, where every
              scent tells a story. Explore our collection of enchanting perfumes
              curated for the modern, confident, and chic woman. Discover the
              magic of delightful aromas that will leave an everlasting trail of
              elegance wherever you go
            </p>

            {/* btn group */}
            <div className="flex items-center gap-4 mx-auto xl:mx-0">
              <Link href="our-perfumes" className="mx-auto md:mx-0">
                <button className="btn btn-primary">Shop now</button>
              </Link>
              <Link href="our-perfumes" className="mx-auto md:mx-0">
                <button className="btn btn-accent">Our Perfumes</button>
              </Link>
            </div>
          </div>
          {/* image */}
          <div className="hidden xl:flex">
            <Image
              src="/hero.png"
              alt="hero"
              width={765}
              height={480}
              quality={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
