import Image from "next/image";
import Container from "@/components/shared/container";

type Props = {
  title: string;
  description: string;
  image: string;
};

export default function CategoryHero({ title, description, image }: Props) {
  return (
    <section className="bg-gradient-to-r from-black via-gray-900 to-orange-600 py-12 text-white md:py-14">
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-medium text-orange-200 sm:text-sm">
              Catégorie FAD-DIS
            </p>

            <h1 className="mt-5 text-4xl font-extrabold leading-tight md:text-5xl">
              {title}
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-7 text-gray-200 md:text-lg md:leading-8">
              {description}
            </p>
          </div>

          <div className="overflow-hidden rounded-[28px] bg-white/10 p-3 shadow-2xl">
            <div className="relative h-[220px] w-full overflow-hidden rounded-[24px] bg-white/5 sm:h-[260px] md:h-[300px]">
              <Image src={image} alt={title} fill className="object-cover" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}