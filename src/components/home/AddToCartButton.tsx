"use client";

import { useTransition } from "react";
import { addToCart } from "@/actions/cart";

type Props = {
  productId: string;
  children: React.ReactNode;
  className?: string;
};

export function AddToCartButton({ productId, children, className }: Props) {
  const [isPending, startTransition] = useTransition();

  return (
    <button
      type="button"
      disabled={isPending}
      className={className}
      onClick={() => startTransition(async () => addToCart({ productId }))}
    >
      {children}
    </button>
  );
}

