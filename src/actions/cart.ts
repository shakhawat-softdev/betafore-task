"use server";

export type AddToCartInput = {
  productId: string;
  quantity?: number;
};

// Minimal placeholder: later we’ll persist to DB/cookies.
export async function addToCart(_input: AddToCartInput) {
  // Intentionally returns void for Next.js action typing.
}

