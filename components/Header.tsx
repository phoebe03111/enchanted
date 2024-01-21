import Link from "next/link";
import Nav from "./Nav";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 py-3 z-40">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="hover:text-current">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="logo" width={45} height={45} />
            <h1 className="text-2xl text-accent hidden md:block">Enchanted Scents</h1>
          </div>
        </Link>
        <div className="flex items-center gap-[26px]">
          <Nav containerStyles="flex gap-[36px]" />
        </div>
      </div>
    </header>
  );
};

export default Header;
