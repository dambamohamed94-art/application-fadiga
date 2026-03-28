import Container from "@/components/shared/container";
import CategoryCard from "@/components/home/category-card";
import ProductCard from "@/components/product/product-card";
import {
  featuredProducts,
  mainCategories,
  serviceHighlights,
  siteConfig,
} from "@/lib/site-data";

export default function HomePage() {
  return (
    <div className="pb-10">


      <section
  className="relative py-20 md:py-28 text-white overflow-hidden"
  style={{
    backgroundImage:
      "linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url('/images/sections/supermarche-bg.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* effet glow orange */}
  <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-orange-500/20 blur-[120px] rounded-full" />
  <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-orange-400/10 blur-[120px] rounded-full" />

  <Container>
    <div className="relative max-w-3xl">
      
      <p className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-orange-300 backdrop-blur">
        Livraison rapide • Produits du quotidien • Orange Money
      </p>

      <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-6xl">
        Faites vos courses en ligne avec{" "}
        <span className="text-orange-400">FAD-DIS</span>
      </h1>

      <p className="mt-6 text-lg text-gray-300 leading-8">
        Découvrez une large sélection de produits alimentaires, boissons,
        surgelés, produits frais et essentiels de maison avec un paiement
        simple via Orange Money.
      </p>

      {/* boutons FIX DEFINITIF */}
      <div className="mt-10 flex flex-col sm:flex-row gap-4">
        
        {/* bouton principal */}
        <a
          href="/categorie/fruits-legumes"
          className="inline-flex items-center justify-center rounded-full 
          bg-orange-500 px-8 py-4 text-base font-semibold text-white
          transition-all duration-200
          hover:bg-orange-600 active:scale-95"
        >
          Voir les catégories
        </a>

        {/* bouton secondaire FIX */}
        <a
          href="#produits"
          className="inline-flex items-center justify-center rounded-full 
          border border-white/30 px-8 py-4 text-base font-semibold text-white
          backdrop-blur
          transition-all duration-200
          hover:bg-white hover:text-black"
        >
          Voir les produits vedettes
        </a>
      </div>
    </div>
  </Container>
</section>



      <section id="categories" className="py-14 md:py-20">
        <Container>
          <div className="mb-10 max-w-3xl md:mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
              Nos univers
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
              Toutes les catégories FAD-DIS
            </h2>
            <p className="mt-4 text-base leading-7 text-gray-600 md:text-lg md:leading-8">
              Un catalogue pensé pour les besoins du quotidien : produits frais,
              boissons, épicerie, surgelés, boulangerie, bio et entretien.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3 md:gap-7">
            {mainCategories.map((category) => (
              <CategoryCard
                key={category.id}
                id={category.id}
                name={category.name}
                description={category.description}
                image={category.image}
                subcategories={category.subcategories}
              />
            ))}
          </div>
        </Container>
      </section>

      <section id="top-ventes" className="bg-gray-50 py-14 md:py-20">
        <Container>
          <div className="mb-10 flex flex-col gap-4 md:mb-12 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
                Sélection
              </p>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
                Produits vedettes
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-7 text-gray-600 md:text-lg md:leading-8">
              Une première sélection de produits réels pour poser l’identité du catalogue.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4 md:gap-7">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                slug={product.slug}
                price={product.price}
                oldPrice={product.oldPrice}
                badge={product.badge}
                unit={product.unit}
                image={product.image}
                category={product.category}
              />
            ))}
          </div>
        </Container>
      </section>

      <section id="qui-sommes-nous" className="py-14 md:py-20">
        <Container>
          <div className="mb-10 max-w-3xl md:mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
              Qui sommes-nous
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
              Une boutique de proximité pensée pour les familles
            </h2>
            <p className="mt-4 text-base leading-7 text-gray-600 md:text-lg md:leading-8">
              FAD-DIS met à votre disposition un supermarché moderne, accessible
              et pratique, avec des produits du quotidien, des rayons variés et
              un service client attentif.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2 md:gap-8">
            <div className="overflow-hidden rounded-[28px] border border-gray-200 bg-white shadow-sm transition hover:shadow-lg">
              <div className="relative h-[280px] w-full sm:h-[340px] md:h-[420px]">
                <img
                  src="/images/sections/boutique.jpg"
                  alt="Présentation de la boutique FAD-DIS"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6 md:p-7">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 md:text-2xl">
                  Notre boutique
                </h3>
                <p className="mt-4 text-sm leading-7 text-gray-600 md:text-base md:leading-8">
                  Un espace pensé pour offrir une expérience d’achat fluide,
                  chaleureuse et bien organisée.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-[28px] border border-gray-200 bg-white shadow-sm transition hover:shadow-lg">
              <div className="relative h-[280px] w-full sm:h-[340px] md:h-[420px]">
                <img
                  src="/images/sections/caissiere.jpg"
                  alt="Accueil client et passage en caisse"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6 md:p-7">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 md:text-2xl">
                  Accueil et accompagnement
                </h3>
                <p className="mt-4 text-sm leading-7 text-gray-600 md:text-base md:leading-8">
                  Notre équipe veille à offrir un accueil professionnel, rapide
                  et agréable.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-gray-50 py-14 md:py-20">
        <Container>
          <div className="mb-10 max-w-3xl md:mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
              Ils nous font confiance
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
              Pourquoi nos clients reviennent
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3 md:gap-7">
            {serviceHighlights.map((item) => (
              <div
                key={item.title}
                className="rounded-[28px] border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg md:p-7"
              >
                <h3 className="text-lg font-bold tracking-tight text-gray-900 md:text-xl">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-gray-600 md:text-base md:leading-8">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14 md:py-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr] md:gap-8">
            <div className="rounded-[32px] bg-black p-7 text-white shadow-2xl md:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-400">
                Paiement
              </p>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl">
                Paiement simple avec <span className="text-orange-400">Orange Money</span>
              </h2>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl bg-white/10 p-5 md:p-6">
                  <h3 className="text-lg font-bold text-orange-300 md:text-xl">
                    Code marchand
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-gray-300 md:text-base">
                    Utilisez le code marchand pour valider vos paiements facilement.
                  </p>
                  <p className="mt-5 text-3xl font-extrabold text-orange-300 md:text-4xl">
                    {siteConfig.orangeMoneyMerchantCode}
                  </p>
                </div>

                <div className="rounded-2xl bg-orange-500/15 p-5 ring-1 ring-orange-400/30 md:p-6">
                  <h3 className="text-lg font-bold text-orange-300 md:text-xl">
                    Scan QR
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-gray-300 md:text-base">
                    Paiement rapide via scan du QR Orange Money.
                  </p>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-orange-200 sm:text-sm">
                    Disponible dans le tunnel de commande
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[32px] border border-gray-200 bg-white p-7 shadow-sm md:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
                Avantages
              </p>

              <div className="mt-6 space-y-6">
                {serviceHighlights.map((item) => (
                  <div key={item.title}>
                    <h3 className="text-lg font-bold tracking-tight text-gray-900 md:text-xl">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-gray-600 md:text-base">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl bg-orange-50 p-5">
                <p className="text-sm font-semibold uppercase tracking-wide text-orange-600">
                  Orange Money
                </p>
                <p className="mt-2 text-sm leading-7 text-gray-700">
                  Un paiement moderne, rapide et adapté aux usages locaux.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}