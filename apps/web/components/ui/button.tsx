import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "dark" | "secondary" | "hero-light";

type CommonProps = {
  children: ReactNode;
  className?: string;
  variant?: Variant;
};

type ButtonAsButton = CommonProps & {
  href?: never;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
};

type ButtonAsLink = CommonProps & {
  href: string;
  type?: never;
  onClick?: never;
};

type Props = ButtonAsButton | ButtonAsLink;

const baseClasses =
  "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold no-underline transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-400";

const variantClasses: Record<Variant, string> = {
  primary:
    "!bg-orange-500 !text-white hover:!bg-black hover:!text-white active:!bg-black visited:!text-white",
  dark:
    "!bg-black !text-white hover:!bg-orange-500 hover:!text-white active:!bg-orange-500 visited:!text-white",
  secondary:
    "!border !border-gray-300 !bg-white !text-gray-900 hover:!border-orange-500 hover:!bg-orange-50 hover:!text-orange-600 active:!border-orange-500 visited:!text-gray-900",
  "hero-light":
    "!bg-white !text-black hover:!bg-orange-100 hover:!text-black active:!bg-orange-100 visited:!text-black",
};

export default function Button(props: Props) {
  const { children, className = "", variant = "primary" } = props;
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={props.type ?? "button"}
      onClick={props.onClick}
      className={classes}
    >
      {children}
    </button>
  );
}