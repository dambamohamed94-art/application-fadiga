"use client";

import Link from "next/link";
import Container from "@/components/shared/container";
import ProductCard from "@/components/product/product-card";
import ProductDetailHero from "@/components/product/product-detail-hero";
import { featuredProducts, mainCategories } from "@/lib/site-data";
import { useCartStore } from "@/store/cart-store";

type Props = {
  params: {
    slug: string;
  };
};

export default function ProductPage({ params }: Props) {
  const addItem = useCartStore((state) => state.addItem);

  const product = featuredProducts.find((item) => item.slug === params.slug);

  if (!product) {
    return (
      <div className="py-16">
        <Container>
          <div className="rounded-[32px] border border-gray-200 bg-white p-12 text-center shadow-sm">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
              Produit introuvable
            </h1>
            <p className="mt-4 text-base leading-8 text-gray-600">
              Le produit demandé n’existe pas encore dans le catalogue.
            </p>
            <div className="mt-8">
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full bg-orange-500 px-8 py-4 text-base font-semibold text-white transition hover:bg-black"
              >
                Retour à l’accueil
              </Link>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  const category = mainCategories.find((item) => item.id === product.categoryId);

  const relatedProducts = featuredProducts.filter(
    (item) => item.categoryId === product.categoryId && item.slug !== product.slug
  );

  return (
    <div className="pb-20">
      <section className="border-b border-gray-200 bg-gray-50 py-6">
        <Container>
          <div className="text-sm text-gray-500">
            <Link href="/" className="hover:text-orange-600">
              Accueil
            </Link>
            <span className="mx-2">/</span>

            {category ? (
              <>
                <Link
                  href={`/categorie/${category.id}`}
                  className="hover:text-orange-600"
                >
                  {category.name}
                </Link>
                <span className="mx-2">/</span>
              </>
            ) : null}

            <span className="font-medium text-gray-800">{product.name}</span>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <ProductDetailHero name={product.name} image={product.image} />

            <div>
              <div className="flex flex-wrap items-center gap-3">
                {product.badge ? (
                  <span className="inline-flex rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-orange-700">
                    {product.badge}
                  </span>
                ) : null}

                {product.category ? (
                  <span className="inline-flex rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">
                    {product.category}
                  </span>
                ) : null}
              </div>

              <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-5xl">
                {product.name}
              </h1>

              {product.unit ? (
                <p className="mt-3 text-base font-medium text-gray-500">
                  Format : {product.unit}
                </p>
              ) : null}

              <div className="mt-8 flex items-end gap-4">
                <span className="text-4xl font-extrabold tracking-tight text-gray-900">
                  {product.price.toLocaleString()} FCFA
                </span>

                {product.oldPrice ? (
                  <span className="pb-1 text-lg text-gray-400 line-through">
                    {product.oldPrice.toLocaleString()} FCFA
                  </span>
                ) : null}
              </div>

              <div className="mt-8 rounded-[28px] border border-gray-200 bg-white p-7 shadow-sm">
                <h2 className="text-xl font-bold tracking-tight text-gray-900">
                  Description
                </h2>

                <p className="mt-4 text-base leading-8 text-gray-600">
                  Ce produit fait partie de la sélection FAD-DIS et permet de
                  préparer la future fiche produit dynamique. La description est
                  fictive pour l’instant, mais la structure est déjà prête pour
                  accueillir les vraies informations issues de la base.
                </p>

                <p className="mt-4 text-base leading-8 text-gray-600">
                  Cette fiche pourra ensuite inclure : ingrédients, origine,
                  disponibilité, stock, promotions, images complémentaires et
                  recommandations personnalisées.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  onClick={() =>
                    addItem({
                      id: product.id,
                      name: product.name,
                      slug: product.slug,
                      price: product.price,
                      image: product.image,
                      unit: product.unit,
                    })
                  }
                  className="inline-flex items-center justify-center rounded-full bg-orange-500 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-black"
                >
                  Ajouter au panier
                </button>

                <Link
                  href="/panier"
                  className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-8 py-4 text-base font-semibold text-gray-900 transition-all duration-200 hover:-translate-y-0.5 hover:border-orange-500 hover:bg-orange-50 hover:text-orange-600"
                >
                  Voir mon panier
                </Link>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
                  <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                    Disponibilité
                  </p>
                  <p className="mt-3 text-base font-bold text-gray-900">En stock</p>
                </div>

                <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
                  <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                    Paiement
                  </p>
                  <p className="mt-3 text-base font-bold text-gray-900">
                    Orange Money
                  </p>
                </div>

                <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
                  <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                    Livraison
                  </p>
                  <p className="mt-3 text-base font-bold text-gray-900">
                    Rapide selon zone
                  </p>
                </div>
              </div>

              <div className="mt-10 rounded-[28px] bg-black p-7 text-white">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-400">
                  Conseil FAD-DIS
                </p>
                <p className="mt-4 text-base leading-8 text-gray-300">
                  Cette fiche produit sera facilement administrable plus tard
                  depuis l’espace admin : ajout, modification, suppression,
                  photos, prix, stock et catégorie.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-gray-50 py-20">
        <Container>
          <div className="mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
              Suggestions
            </p>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900">
              Produits similaires
            </h2>
          </div>

          {relatedProducts.length === 0 ? (
            <div className="rounded-[32px] border border-dashed border-gray-300 bg-white p-12 text-center">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                Aucun produit similaire pour le moment
              </h3>
              <p className="mt-4 text-base leading-8 text-gray-600">
                D’autres produits de cette catégorie pourront être ajoutés depuis l’admin.
              </p>
            </div>
          ) : (
            <div className="grid gap-7 sm:grid-cols-2 xl:grid-cols-4">
              {relatedProducts.map((item) => (
                <ProductCard
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  slug={item.slug}
                  price={item.price}
                  oldPrice={item.oldPrice}
                  badge={item.badge}
                  unit={item.unit}
                  image={item.image}
                  category={item.category}
                />
              ))}
            </div>
          )}
        </Container>
      </section>
    </div>
  );
}