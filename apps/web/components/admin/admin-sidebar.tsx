import Link from "next/link";
import Container from "@/components/shared/container";

export default function AdminPage() {
  return (
    <div className="py-14">
      <Container>
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
            Back-office
          </p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-gray-900">
            Administration FAD-DIS
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-8 text-gray-600">
            Gérez le catalogue, les produits et les futures commandes depuis une
            interface simple.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Link
            href="/admin/produits"
            className="rounded-[28px] border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
              Produits
            </h2>
            <p className="mt-3 text-base leading-8 text-gray-600">
              Ajouter, modifier ou supprimer les produits du catalogue.
            </p>
          </Link>

          <div className="rounded-[28px] border border-dashed border-gray-300 bg-gray-50 p-8">
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
              Catégories
            </h2>
            <p className="mt-3 text-base leading-8 text-gray-600">
              Sera branché ensuite.
            </p>
          </div>

          <div className="rounded-[28px] border border-dashed border-gray-300 bg-gray-50 p-8">
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
              Commandes
            </h2>
            <p className="mt-3 text-base leading-8 text-gray-600">
              Sera branché ensuite.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}