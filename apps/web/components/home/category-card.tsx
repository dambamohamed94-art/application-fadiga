import Link from "next/link";
import Image from "next/image";

type Props = {
  id: string;
  name: string;
  description: string;
  image: string;
  subcategories: string[];
};

export default function CategoryCard({
  id,
  name,
  description,
  image,
  subcategories,
}: Props) {
  return (
    <Link
      href={`/categorie/${id}`}
      className="group overflow-hidden rounded-[28px] border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative h-56 w-full overflow-hidden bg-gray-100">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />

        <div className="absolute left-5 top-5">
          <span className="inline-flex rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gray-900 shadow-sm">
            FAD-DIS
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-2xl font-extrabold tracking-tight text-gray-900">
            {name}
          </h3>

          <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-orange-600">
            Catégorie
          </span>
        </div>

        <p className="mt-4 text-base leading-7 text-gray-600">
          {description}
        </p>

        <div className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
            Sous-catégories
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {subcategories.slice(0, 4).map((item) => (
              <span
                key={item}
                className="rounded-full border border-gray-200 bg-gray-50 px-3 py-2 text-xs font-medium text-gray-700"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-7 flex items-center justify-between">
          <span className="text-sm font-semibold text-gray-900 group-hover:text-orange-600">
            Explorer la catégorie
          </span>

          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-black text-white transition-colors duration-300 group-hover:bg-orange-500">
            →
          </span>
        </div>
      </div>
    </Link>
  );
}