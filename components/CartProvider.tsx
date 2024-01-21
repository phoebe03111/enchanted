"use client";

import { ReactNode } from "react";
import { CartProvider as CProvider } from "use-shopping-cart";

const CartProvider = ({ children }: { children: ReactNode }) => {
  return (
    <CProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.NEXT_PUBLIC_STRIPE_KEY!}
      successUrl={`${process.env.NEXT_PUBLIC_APP_URL}/stripe/success`}
      cancelUrl={`${process.env.NEXT_PUBLIC_APP_URL}/stripe/error`}
      language="en-US"
      currency="CAD"
      billingAddressCollection={true}
      shouldPersist={true}
    >
      {children}
    </CProvider>
  );
};

export default CartProvider;
