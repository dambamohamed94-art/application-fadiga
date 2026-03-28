"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  ChevronDown,
  Menu,
  ShoppingCart,
  User,
  X,
} from "lucide-react";
import Container from "@/components/shared/container";
import { mainCategories } from "@/lib/site-data";
import { useCartStore } from "@/store/cart-store";

export default function Header() {
  const [openCategories, setOpenCategories] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [openMobileCategories, setOpenMobileCategories] = useState(false);
  const itemCount = useCartStore((state) => state.getItemCount());

  useEffect(() => {
    if (openMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [openMobileMenu]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 shadow-sm backdrop-blur">
        <Container className="flex h-16 items-center justify-between gap-3 md:h-20 md:gap-6">
          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={() => setOpenMobileMenu(true)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-800"
              aria-label="Ouvrir le menu"
            >
              <Menu size={20} />
            </button>
          </div>

          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/brands/logo-faddis.png"
              alt="FAD-DIS"
               width={0}
            height={0}
            sizes="100vw"
            className="h-40 w-auto"
            />
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <Link
              href="/"
              className="text-sm font-medium text-gray-700 transition hover:text-orange-600"
            >
              Accueil
            </Link>

            <div className="relative">
              <button
                type="button"
                onClick={() => setOpenCategories((prev) => !prev)}
                className="flex items-center gap-2 text-sm font-medium text-gray-700 transition hover:text-orange-600"
              >
                Catégories
                <ChevronDown size={16} />
              </button>

              {openCategories ? (
                <div className="absolute left-0 top-full mt-3 w-[380px] rounded-3xl border border-gray-200 bg-white p-4 shadow-2xl">
                  <div className="mb-3 flex items-center justify-between">
                    <p className="text-sm font-semibold text-gray-900">
                      Nos catégories
                    </p>
                    <button
                      type="button"
                      onClick={() => setOpenCategories(false)}
                      className="text-xs font-medium text-gray-400 hover:text-orange-600"
                    >
                      Fermer
                    </button>
                  </div>

                  <div className="grid gap-2">
                    {mainCategories.map((category) => (
                      <Link
                        key={category.id}
                        href={`/categorie/${category.id}`}
                        onClick={() => setOpenCategories(false)}
                        className="rounded-2xl px-4 py-3 text-sm text-gray-700 transition hover:bg-orange-50 hover:text-orange-600"
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>

            <a
              href="/#qui-sommes-nous"
              className="text-sm font-medium text-gray-700 transition hover:text-orange-600"
            >
              Qui sommes-nous
            </a>

            <Link
              href="/checkout"
              className="text-sm font-medium text-gray-700 transition hover:text-orange-600"
            >
              Paiement
            </Link>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="/mon-compte"
              className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors duration-200 hover:border-orange-500 hover:bg-orange-50 hover:text-orange-600"
            >
              <User size={16} />
              Mon compte
            </Link>

            <Link
              href="/panier"
              className="relative inline-flex items-center gap-2 rounded-full bg-orange-500 px-5 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-black"
            >
              <ShoppingCart size={16} className="text-white" />
              <span className="text-white">Panier</span>

              {itemCount > 0 ? (
                <span className="ml-1 inline-flex min-w-6 items-center justify-center rounded-full bg-white px-2 py-0.5 text-xs font-bold text-black">
                  {itemCount}
                </span>
              ) : null}
            </Link>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <Link
              href="/panier"
              className="relative inline-flex h-11 w-11 items-center justify-center rounded-full bg-orange-500 text-white"
              aria-label="Panier"
            >
              <ShoppingCart size={18} />
              {itemCount > 0 ? (
                <span className="absolute -right-1 -top-1 inline-flex min-w-5 items-center justify-center rounded-full bg-black px-1.5 py-0.5 text-[10px] font-bold text-white">
                  {itemCount}
                </span>
              ) : null}
            </Link>
          </div>
        </Container>
      </header>

      {openMobileMenu ? (
        <div className="fixed inset-0 z-[70] md:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-black/45"
            onClick={() => {
              setOpenMobileMenu(false);
              setOpenMobileCategories(false);
            }}
            aria-label="Fermer le menu"
          />

          <div className="absolute left-0 top-0 h-full w-[88%] max-w-[340px] bg-white shadow-2xl">
            <div className="flex h-full flex-col">
              <div className="flex items-center justify-between border-b border-gray-200 px-4 py-4">
                <div className="flex items-center gap-3">
                  <Image
                    src="/images/brands/logo.jpeg"
                    alt="FAD-DIS"
                    width={110}
                    height={42}
                    className="h-9 w-auto object-contain"
                  />
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setOpenMobileMenu(false);
                    setOpenMobileCategories(false);
                  }}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-800"
                  aria-label="Fermer le menu"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-4 py-5">
                <div className="space-y-2">
                  <Link
                    href="/"
                    onClick={() => setOpenMobileMenu(false)}
                    className="block rounded-2xl px-4 py-3 text-base font-medium text-gray-800 hover:bg-orange-50 hover:text-orange-600"
                  >
                    Accueil
                  </Link>

                  <a
                    href="/#qui-sommes-nous"
                    onClick={() => setOpenMobileMenu(false)}
                    className="block rounded-2xl px-4 py-3 text-base font-medium text-gray-800 hover:bg-orange-50 hover:text-orange-600"
                  >
                    Qui sommes-nous
                  </a>

                  <Link
                    href="/checkout"
                    onClick={() => setOpenMobileMenu(false)}
                    className="block rounded-2xl px-4 py-3 text-base font-medium text-gray-800 hover:bg-orange-50 hover:text-orange-600"
                  >
                    Paiement
                  </Link>

                  <Link
                    href="/mon-compte"
                    onClick={() => setOpenMobileMenu(false)}
                    className="block rounded-2xl px-4 py-3 text-base font-medium text-gray-800 hover:bg-orange-50 hover:text-orange-600"
                  >
                    Mon compte
                  </Link>
                </div>

                <div className="mt-6 border-t border-gray-200 pt-6">
                  <button
                    type="button"
                    onClick={() => setOpenMobileCategories((prev) => !prev)}
                    className="flex w-full items-center justify-between rounded-2xl bg-gray-50 px-4 py-3 text-left text-base font-semibold text-gray-900"
                  >
                    <span>Catégories</span>
                    <ChevronDown
                      size={18}
                      className={`transition-transform ${
                        openMobileCategories ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {openMobileCategories ? (
                    <div className="mt-3 space-y-2">
                      {mainCategories.map((category) => (
                        <Link
                          key={category.id}
                          href={`/categorie/${category.id}`}
                          onClick={() => {
                            setOpenMobileMenu(false);
                            setOpenMobileCategories(false);
                          }}
                          className="block rounded-2xl px-4 py-3 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                        >
                          {category.name}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>

                <div className="mt-8 space-y-3">
                  <Link
                    href="/panier"
                    onClick={() => setOpenMobileMenu(false)}
                    className="inline-flex w-full items-center justify-center rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-black"
                  >
                    Voir le panier
                  </Link>

                  <Link
                    href="/checkout?mode=guest"
                    onClick={() => setOpenMobileMenu(false)}
                    className="inline-flex w-full items-center justify-center rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-900 transition hover:border-orange-500 hover:bg-orange-50 hover:text-orange-600"
                  >
                    Commander
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}