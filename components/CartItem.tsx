import { useShoppingCart } from "use-shopping-cart";
import Image from "next/image";
import { Minus, Plus, X } from "lucide-react";

const CartItem = ({ item }: any) => {
    const { removeItem, incrementItem, decrementItem } = useShoppingCart();

  return (
    <div className="flex w-full justify-between items-center h-[120px] mb-4 border-b">
      {/* image */}
      <div className="w-[80px] h-[80px] relative">
        <Image
          src={item.image}
          fill
          priority
          sizes="(max-width:110px) 80px, 80px"
          className="object-contain"
          alt={item.name}
        />
      </div>

      {/* name, price, quantity, remove */}
      <div className="w-full max-w-[180px] flex flex-col justify-center gap-4">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <p className="text-sm">{item.brand}</p>
            <h5>{item.name}</h5>
          </div>
          <button onClick={() => removeItem(item.id)}>
            <X className="text-sm" />
          </button>
        </div>

        {/* increment, decrement, item price */}
        <div className="flex justify-between items-center">
          <div className="flex gap-4">
            <button onClick={() => decrementItem(item.id)}>
              <Minus className="text-[10px]" />
            </button>
            <div>{item.quantity}</div>
            <button onClick={() => incrementItem(item.id)}>
              <Plus className="text-[10px]" />
            </button>
          </div>
          <div className="font-semibold text-balance text-right">
            ${item.price * item.quantity}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
