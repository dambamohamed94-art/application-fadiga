"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "@/components/shared/container";
import { useCartStore } from "@/store/cart-store";

export default function PanierPage() {
  const items = useCartStore((state) => state.items);
  const addItem = useCartStore((state) => state.addItem);
  const decreaseItem = useCartStore((state) => state.decreaseItem);
  const removeItem = useCartStore((state) => state.removeItem);
  const total = useCartStore((state) => state.getTotal());

  return (
    <div className="pb-20">
      <section className="border-b border-gray-200 bg-gray-50 py-8">
        <Container>
          <div className="text-sm text-gray-500">
            <Link href="/" className="hover:text-orange-600">
              Accueil
            </Link>
            <span className="mx-2">/</span>
            <span className="font-medium text-gray-800">Panier</span>
          </div>

          <div className="mt-5">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
              Mon panier
            </p>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
              Vérifiez votre sélection
            </h1>
            <p className="mt-3 max-w-2xl text-base leading-7 text-gray-600 md:leading-8">
              Retrouvez ici les produits ajoutés à votre panier et préparez votre commande.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-12 md:py-16">
        <Container>
          {items.length === 0 ? (
            <div className="rounded-[32px] border border-gray-200 bg-white p-10 text-center shadow-sm md:p-12">
              <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 md:text-3xl">
                Votre panier est vide
              </h2>
              <p className="mt-4 text-base leading-7 text-gray-600 md:leading-8">
                Ajoutez quelques produits pour commencer vos achats.
              </p>

              <div className="mt-8">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center rounded-full bg-orange-500 px-8 py-4 text-base font-semibold text-white transition hover:bg-black"
                >
                  Retour à la boutique
                </Link>
              </div>
            </div>
          ) : (
            <div className="grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-5">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-[28px] border border-gray-200 bg-white p-5 shadow-sm md:p-6"
                  >
                    <div className="grid gap-5 md:grid-cols-[150px_1fr_auto]">
                      <div className="relative h-36 w-full overflow-hidden rounded-[24px] bg-gray-50">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-contain p-3"
                        />
                      </div>

                      <div>
                        <h3 className="text-xl font-extrabold tracking-tight text-gray-900 md:text-2xl">
                          {item.name}
                        </h3>

                        {item.unit ? (
                          <p className="mt-2 text-sm font-medium text-gray-500">
                            {item.unit}
                          </p>
                        ) : null}

                        <p className="mt-4 text-lg font-bold text-orange-600">
                          {item.price.toLocaleString()} FCFA
                        </p>

                        <p className="mt-2 text-sm leading-7 text-gray-500">
                          Produit ajouté au panier local. Cette ligne sera reliée à la
                          base de données plus tard.
                        </p>
                      </div>

                      <div className="flex flex-col gap-4 md:items-end md:justify-between">
                        <div className="inline-flex w-fit items-center gap-3 rounded-full border border-gray-200 bg-gray-50 px-3 py-2">
                          <button
                            onClick={() => decreaseItem(item.id)}
                            className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-lg font-bold text-gray-900 shadow-sm transition hover:bg-orange-50 hover:text-orange-600"
                          >
                            -
                          </button>

                          <span className="min-w-8 text-center text-sm font-bold text-gray-900">
                            {item.quantity}
                          </span>

                          <button
                            onClick={() =>
                              addItem({
                                id: item.id,
                                name: item.name,
                                slug: item.slug,
                                price: item.price,
                                image: item.image,
                                unit: item.unit,
                              })
                            }
                            className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-lg font-bold text-gray-900 shadow-sm transition hover:bg-orange-50 hover:text-orange-600"
                          >
                            +
                          </button>
                        </div>

                        <p className="text-lg font-extrabold tracking-tight text-gray-900">
                          {(item.price * item.quantity).toLocaleString()} FCFA
                        </p>

                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-left text-sm font-semibold text-red-500 transition hover:text-red-700 md:text-right"
                        >
                          Supprimer
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <div className="rounded-[32px] border border-gray-200 bg-white p-7 shadow-sm xl:sticky xl:top-28 md:p-8">
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
                    Résumé
                  </p>
                  <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-gray-900">
                    Total panier
                  </h2>

                  <div className="mt-8 space-y-4 border-b border-gray-200 pb-6 text-sm">
                    <div className="flex items-center justify-between text-gray-600">
                      <span>Sous-total</span>
                      <span className="font-semibold text-gray-900">
                        {total.toLocaleString()} FCFA
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-gray-600">
                      <span>Livraison</span>
                      <span className="font-semibold text-gray-900">
                        Calculée au checkout
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-lg font-bold text-gray-900">Total</span>
                    <span className="text-3xl font-extrabold tracking-tight text-orange-600">
                      {total.toLocaleString()} FCFA
                    </span>
                  </div>

                  <div className="mt-8 space-y-4">
                    <Link
                      href="/checkout?mode=guest"
                      className="inline-flex w-full items-center justify-center rounded-full bg-black px-8 py-4 text-base font-semibold text-white transition hover:bg-orange-500"
                    >
                      Valider sans compte
                    </Link>

                    <Link
                      href="/mon-compte"
                      className="inline-flex w-full items-center justify-center rounded-full border border-gray-300 bg-white px-8 py-4 text-base font-semibold text-gray-900 transition hover:border-orange-500 hover:bg-orange-50 hover:text-orange-600"
                    >
                      Me connecter / créer un compte
                    </Link>

                    <Link
                      href="/"
                      className="inline-flex w-full items-center justify-center rounded-full bg-orange-500 px-8 py-4 text-base font-semibold text-white transition hover:bg-black"
                    >
                      Continuer mes achats
                    </Link>
                  </div>

                  <div className="mt-8 rounded-[24px] bg-gray-50 p-5">
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
                      Information
                    </p>
                    <p className="mt-3 text-sm leading-7 text-gray-600">
                      Le panier est actuellement géré en local. Il sera ensuite
                      synchronisé avec la base pour les utilisateurs connectés et
                      les commandes invitées.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Container>
      </section>
    </div>
  );
}