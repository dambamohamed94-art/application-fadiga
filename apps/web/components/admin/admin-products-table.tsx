"use client";

type ProductItem = {
  id: string;
  name: string;
  category: string;
  price: number;
  unit?: string;
  status: "Actif" | "Brouillon";
};

type Props = {
  products: ProductItem[];
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
};

export default function AdminProductsTable({
  products,
  onDelete,
  onEdit,
}: Props) {
  return (
    <div className="overflow-hidden rounded-[28px] border border-gray-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr className="text-left">
              <th className="px-6 py-4 text-sm font-semibold text-gray-700">Produit</th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-700">Catégorie</th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-700">Prix</th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-700">Statut</th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-700">Actions</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-t border-gray-100">
                <td className="px-6 py-5">
                  <div>
                    <p className="font-bold text-gray-900">{product.name}</p>
                    {product.unit ? (
                      <p className="mt-1 text-sm text-gray-500">{product.unit}</p>
                    ) : null}
                  </div>
                </td>

                <td className="px-6 py-5 text-sm text-gray-600">
                  {product.category}
                </td>

                <td className="px-6 py-5 text-sm font-semibold text-gray-900">
                  {product.price.toLocaleString()} FCFA
                </td>

                <td className="px-6 py-5">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      product.status === "Actif"
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {product.status}
                  </span>
                </td>

                <td className="px-6 py-5">
                  <div className="flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={() => onEdit(product.id)}
                      className="rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:border-orange-500 hover:bg-orange-50 hover:text-orange-600"
                    >
                      Modifier
                    </button>

                    <button
                      type="button"
                      onClick={() => onDelete(product.id)}
                      className="rounded-full border border-red-200 px-4 py-2 text-sm font-medium text-red-600 transition hover:bg-red-50"
                    >
                      Supprimer
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}