"use client";

import { useMemo, useState } from "react";
import Container from "@/components/shared/container";
import AdminSidebar from "@/components/admin/admin-sidebar";
import AdminProductsTable from "@/components/admin/admin-products-table";
import AdminProductForm from "@/components/admin/admin-product-form";
import { featuredProducts } from "@/lib/site-data";

type AdminProduct = {
  id: string;
  name: string;
  category: string;
  price: number;
  unit?: string;
  status: "Actif" | "Brouillon";
};

export default function AdminProduitsPage() {
  const [products, setProducts] = useState<AdminProduct[]>(
    featuredProducts.map((item) => ({
      id: item.id,
      name: item.name,
      category: item.category ?? "Sans catégorie",
      price: item.price,
      unit: item.unit,
      status: "Actif",
    }))
  );

  const [search, setSearch] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);

  const editingProduct = useMemo(() => {
    return products.find((item) => item.id === editingId) ?? null;
  }, [editingId, products]);

  const filteredProducts = useMemo(() => {
    const value = search.trim().toLowerCase();
    if (!value) return products;

    return products.filter(
      (item) =>
        item.name.toLowerCase().includes(value) ||
        item.category.toLowerCase().includes(value)
    );
  }, [products, search]);

  return (
    <div className="py-14">
      <Container>
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
            Back-office
          </p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-gray-900">
            Gestion des produits
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-8 text-gray-600">
            Cette version est statique, mais déjà pensée pour que l’admin puisse
            ajouter, modifier et supprimer les produits sans toucher au code.
          </p>
        </div>

        <div className="grid gap-8 xl:grid-cols-[300px_1fr]">
          <AdminSidebar />

          <div className="space-y-8">
            <div className="rounded-[28px] border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
                    Catalogue produits
                  </h2>
                  <p className="mt-2 text-sm leading-7 text-gray-600">
                    Recherchez et gérez les produits affichés sur le site.
                  </p>
                </div>

                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Rechercher un produit ou une catégorie"
                  className="h-12 w-full rounded-2xl border border-gray-300 px-4 outline-none focus:border-orange-500 md:max-w-md"
                />
              </div>
            </div>

            <AdminProductForm
              initialData={
                editingProduct
                  ? {
                      id: editingProduct.id,
                      name: editingProduct.name,
                      category: editingProduct.category,
                      price: String(editingProduct.price),
                      unit: editingProduct.unit ?? "",
                      status: editingProduct.status,
                    }
                  : null
              }
              onSubmit={(data) => {
                if (data.id) {
                  setProducts((prev) =>
                    prev.map((item) =>
                      item.id === data.id
                        ? {
                            ...item,
                            name: data.name,
                            category: data.category,
                            price: Number(data.price || 0),
                            unit: data.unit,
                            status: data.status,
                          }
                        : item
                    )
                  );
                  setEditingId(null);
                  return;
                }

                setProducts((prev) => [
                  {
                    id: `prod-${Date.now()}`,
                    name: data.name,
                    category: data.category,
                    price: Number(data.price || 0),
                    unit: data.unit,
                    status: data.status,
                  },
                  ...prev,
                ]);
              }}
              onCancel={() => setEditingId(null)}
            />

            <AdminProductsTable
              products={filteredProducts}
              onEdit={(id) => setEditingId(id)}
              onDelete={(id) =>
                setProducts((prev) => prev.filter((item) => item.id !== id))
              }
            />
          </div>
        </div>
      </Container>
    </div>
  );
}