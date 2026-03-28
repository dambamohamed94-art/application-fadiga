import Image from "next/image";

type Props = {
  name: string;
  image: string;
};

export default function ProductDetailHero({ name, image }: Props) {
  return (
    <div className="overflow-hidden rounded-[32px] border border-gray-200 bg-white shadow-sm">
      <div className="relative h-[320px] w-full bg-gradient-to-br from-gray-50 to-white sm:h-[420px] md:h-[520px]">
        <Image
          src={image}
          alt={name}
          fill
          priority
          className="object-contain p-6 sm:p-8 md:p-10"
        />
      </div>
    </div>
  );
}