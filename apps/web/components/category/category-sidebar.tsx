type Props = {
  subcategories: string[];
};

export default function CategorySidebar({ subcategories }: Props) {
  return (
    <aside className="rounded-[28px] border border-gray-200 bg-white p-5 shadow-sm md:p-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
          Sous-catégories
        </p>

        <div className="mt-5 space-y-2">
          {subcategories.map((item) => (
            <button
              key={item}
              type="button"
              className="w-full rounded-2xl border border-gray-200 px-4 py-3 text-left text-sm font-medium text-gray-700 transition hover:border-orange-500 hover:bg-orange-50 hover:text-orange-600"
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 border-t pt-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
          Filtres visuels
        </p>

        <div className="mt-5 space-y-3">
          <label className="flex items-center gap-3 text-sm text-gray-700">
            <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
            En promotion
          </label>

          <label className="flex items-center gap-3 text-sm text-gray-700">
            <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
            Nouveautés
          </label>

          <label className="flex items-center gap-3 text-sm text-gray-700">
            <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
            Disponibles
          </label>
        </div>
      </div>

      <div className="mt-8 rounded-[24px] bg-black p-5 text-white">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
          Conseil
        </p>
        <p className="mt-3 text-sm leading-7 text-gray-300">
          Cette zone sera branchée plus tard à de vrais filtres dynamiques depuis la base.
        </p>
      </div>
    </aside>
  );
}