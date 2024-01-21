import { ReactNode } from "react";
import { useShoppingCart } from "use-shopping-cart";
import { useToast } from "./ui/use-toast";

interface AddToCartBtnProps {
  btnStyles: string;
  text?: string;
  icon: ReactNode;
  currency: string;
  name: string;
  brand: string;
  image: string;
  price: number;
  priceId: string;
}

const AddToCartBtn = ({
  btnStyles,
  text,
  icon,
  currency,
  name,
  brand,
  image,
  price,
  priceId,
}: AddToCartBtnProps) => {
  const { addItem } = useShoppingCart();
  const { toast } = useToast();

  const perfume: any = {
    currency,
    name,
    brand,
    image,
    price,
    priceId,
  };

  return (
    <button
      className={`${btnStyles}`}
      onClick={() => {
        addItem(perfume);
        toast({ title: `${brand}${name} has been added to the cart` });
      }}
    >
      <div>{text}</div>
      <div>{icon}</div>
    </button>
  );
};

export default AddToCartBtn;
