import Container from "@/components/shared/container";

export default function SearchBar() {
  return (
    <div className="border-b border-gray-200 bg-gray-50">
      <Container className="py-3 md:py-4">
        <div className="flex flex-col gap-3 md:flex-row">
          <input
            type="text"
            placeholder="Rechercher un produit, une catégorie, une marque..."
            className="h-11 w-full rounded-full border border-gray-300 bg-white px-5 text-sm outline-none transition focus:border-orange-500 md:h-12 md:flex-1"
          />

          <button className="h-11 rounded-full bg-black px-6 text-sm font-semibold text-white transition hover:bg-orange-500 md:h-12">
            Rechercher
          </button>
        </div>
      </Container>
    </div>
  );
}