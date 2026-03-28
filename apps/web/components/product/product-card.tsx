"use client";

import Link from "next/link";
import Image from "next/image";
import { useCartStore } from "@/store/cart-store";

type Props = {
  id: string;
  name: string;
  slug: string;
  price: number;
  oldPrice?: number | null;
  badge?: string;
  unit?: string;
  image: string;
  category?: string;
};

export default function ProductCard({
  id,
  name,
  slug,
  price,
  oldPrice,
  badge,
  unit,
  image,
  category,
}: Props) {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <div className="group overflow-hidden rounded-[28px] border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <Link href={`/produit/${slug}`} className="block">
        <div className="relative h-64 w-full overflow-hidden bg-gray-50">
          <Image
            src={image}
            alt={name}
            fill
            className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
          />

          <div className="absolute left-4 top-4 flex flex-wrap gap-2">
            {badge ? (
              <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-orange-700 shadow-sm">
                {badge}
              </span>
            ) : null}

            {category ? (
              <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gray-800 shadow-sm">
                {category}
              </span>
            ) : null}
          </div>
        </div>

        <div className="p-6">
          <h3 className="line-clamp-2 text-xl font-extrabold tracking-tight text-gray-900">
            {name}
          </h3>

          {unit ? (
            <p className="mt-2 text-sm font-medium text-gray-500">{unit}</p>
          ) : null}

          <div className="mt-5 flex items-end gap-3">
            <span className="text-2xl font-extrabold tracking-tight text-gray-900">
              {price.toLocaleString()} FCFA
            </span>

            {oldPrice ? (
              <span className="pb-0.5 text-sm text-gray-400 line-through">
                {oldPrice.toLocaleString()} FCFA
              </span>
            ) : null}
          </div>
        </div>
      </Link>

      <div className="px-6 pb-6">
        <button
          onClick={() =>
            addItem({
              id,
              name,
              slug,
              price,
              image,
              unit,
            })
          }
          className="inline-flex w-full items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-orange-500"
        >
          Ajouter au panier
        </button>
      </div>
    </div>
  );
}