import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";
import { Input } from "./ui/input";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="pt-12 xl:pt-24 bg-primary text-white text-center">
      <div className="container mx-auto">
        <div className="flex flex-col gap-8">
          <div>
            <h2 className="capitalize leading-tight mb-2">
              Subscribe to our newsletter
            </h2>
            <p className="text-white/60">
              Be the first to get the latest news about trends, promotions, and
              much more!
            </p>
          </div>
          {/* form */}
          <form className="flex flex-col xl:flex-row w-full max-w-[720px] mx-auto gap-5">
            <Input placeholder="Your email address" className="h-50"/>
            <button className="btn w-full xl:max-w-[150px] bg-accent">
              Join
            </button>
          </form>

          {/* socials */}
          <div className="flex items-center gap-8 mx-auto text-[20px] text-white/60 mb-12">
            <Link href="/">
              <FacebookIcon />
            </Link>
            <Link href="/">
              <InstagramIcon />
            </Link>
            <Link href="/">
              <YoutubeIcon />
            </Link>
            <Link href="/">
              <TwitterIcon />
            </Link>
          </div>
        </div>
      </div>
      <div className="py-6 border-t border-white/5 text-white/60">
        Copyright &copy; 2024 Enchanted Scents. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
