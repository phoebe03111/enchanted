import { ReactNode } from "react";

interface AddToCartBtnProps {
  btnStyles: string;
  text?: string;
  icon: ReactNode;
}

const AddToCartBtn = ({ btnStyles, text, icon }: AddToCartBtnProps) => {
  return (
    <button className={`${btnStyles}`}>
      <div>{text}</div>
      <div>{icon}</div>
    </button>
  );
};

export default AddToCartBtn;
