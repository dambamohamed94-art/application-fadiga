import Container from "@/components/shared/container";
import ProductCard from "@/components/product/product-card";
import CategoryHero from "@/components/category/category-hero";
import CategorySidebar from "@/components/category/category-sidebar";
import { featuredProducts, mainCategories } from "@/lib/site-data";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;

  const category = mainCategories.find((item) => item.id === slug);

  if (!category) {
    return (
      <div className="py-16">
        <Container>
          <div className="rounded-[32px] border border-gray-200 bg-white p-10 text-center shadow-sm md:p-12">
            <h1 className="text-3xl font-extrabold text-gray-900">
              Catégorie introuvable
            </h1>
            <p className="mt-3 text-base leading-7 text-gray-600 md:leading-8">
              La catégorie demandée n’existe pas encore dans le catalogue.
            </p>
          </div>
        </Container>
      </div>
    );
  }

  const categoryProducts = featuredProducts.filter(
    (product) => product.categoryId === category.id
  );

  return (
    <div className="pb-16">
      <CategoryHero
        title={category.name}
        description={category.description}
        image={category.image}
      />

      <section className="py-12 md:py-14">
        <Container>
          <div className="mb-8 flex flex-col gap-4 md:mb-10 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
                Catalogue
              </p>
              <h2 className="mt-3 text-3xl font-extrabold text-gray-900 md:text-4xl">
                Explorez la catégorie {category.name}
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <select className="w-full rounded-full border border-gray-300 bg-white px-5 py-3 text-sm font-medium text-gray-700 outline-none md:w-auto">
                <option>Trier par</option>
                <option>Prix croissant</option>
                <option>Prix décroissant</option>
                <option>Nouveautés</option>
              </select>
            </div>
          </div>

          <div className="grid gap-8 xl:grid-cols-[320px_1fr]">
            <CategorySidebar subcategories={category.subcategories} />

            <div>
              {categoryProducts.length === 0 ? (
                <div className="rounded-[32px] border border-dashed border-gray-300 bg-gray-50 p-10 text-center md:p-12">
                  <h3 className="text-2xl font-bold text-gray-900">
                    Aucun produit encore affiché
                  </h3>
                  <p className="mt-3 text-base leading-7 text-gray-600 md:leading-8">
                    Cette catégorie est prête. Tu pourras l’alimenter ensuite depuis l’admin.
                  </p>
                </div>
              ) : (
                <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3 md:gap-7">
                  {categoryProducts.map((product) => (
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
              )}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}