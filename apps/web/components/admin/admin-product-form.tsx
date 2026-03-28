"use client";

import { useEffect, useState } from "react";
import { mainCategories } from "@/lib/site-data";

type ProductFormData = {
  id?: string;
  name: string;
  category: string;
  price: string;
  unit: string;
  status: "Actif" | "Brouillon";
};

type Props = {
  initialData?: ProductFormData | null;
  onSubmit: (data: ProductFormData) => void;
  onCancel: () => void;
};

export default function AdminProductForm({
  initialData,
  onSubmit,
  onCancel,
}: Props) {
  const [form, setForm] = useState<ProductFormData>({
    name: "",
    category: mainCategories[0]?.name ?? "",
    price: "",
    unit: "",
    status: "Actif",
  });

  useEffect(() => {
    if (initialData) {
      setForm(initialData);
    } else {
      setForm({
        name: "",
        category: mainCategories[0]?.name ?? "",
        price: "",
        unit: "",
        status: "Actif",
      });
    }
  }, [initialData]);

  return (
    <div className="rounded-[28px] border border-gray-200 bg-white p-8 shadow-sm">
      <div className="mb-6">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
          Formulaire
        </p>
        <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-gray-900">
          {initialData ? "Modifier le produit" : "Ajouter un produit"}
        </h2>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(form);
        }}
        className="grid gap-5 md:grid-cols-2"
      >
        <div className="md:col-span-2">
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Nom du produit
          </label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
            className="h-12 w-full rounded-2xl border border-gray-300 px-4 outline-none focus:border-orange-500"
            placeholder="Nom du produit"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Catégorie
          </label>
          <select
            value={form.category}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, category: e.target.value }))
            }
            className="h-12 w-full rounded-2xl border border-gray-300 px-4 outline-none focus:border-orange-500"
          >
            {mainCategories.map((category) => (
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Prix
          </label>
          <input
            type="text"
            value={form.price}
            onChange={(e) => setForm((prev) => ({ ...prev, price: e.target.value }))}
            className="h-12 w-full rounded-2xl border border-gray-300 px-4 outline-none focus:border-orange-500"
            placeholder="4500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Unité / format
          </label>
          <input
            type="text"
            value={form.unit}
            onChange={(e) => setForm((prev) => ({ ...prev, unit: e.target.value }))}
            className="h-12 w-full rounded-2xl border border-gray-300 px-4 outline-none focus:border-orange-500"
            placeholder="1 L"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Statut
          </label>
          <select
            value={form.status}
            onChange={(e) =>
              setForm((prev) => ({
                ...prev,
                status: e.target.value as "Actif" | "Brouillon",
              }))
            }
            className="h-12 w-full rounded-2xl border border-gray-300 px-4 outline-none focus:border-orange-500"
          >
            <option value="Actif">Actif</option>
            <option value="Brouillon">Brouillon</option>
          </select>
        </div>

        <div className="md:col-span-2 flex flex-wrap gap-3 pt-2">
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-black"
          >
            {initialData ? "Enregistrer les modifications" : "Ajouter le produit"}
          </button>

          <button
            type="button"
            onClick={onCancel}
            className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-900 transition hover:border-orange-500 hover:bg-orange-50 hover:text-orange-600"
          >
            Annuler
          </button>
        </div>
      </form>
    </div>
  );
}