import { Link } from "react-router-dom";

const styles = {
  primary:
    "bg-terracotta text-white shadow-md shadow-terracotta/20 hover:bg-[#B20D6A]",
  secondary:
    "border border-white/70 text-white hover:bg-white hover:text-teal",
  teal: "bg-teal text-white hover:bg-[#174b3e]",
  outline:
    "border border-teal/25 text-teal hover:border-teal hover:bg-teal hover:text-white",
};

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  ...props
}) {
  const classes = `inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-extrabold transition duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-saffron ${styles[variant]} ${className}`;

  if (href?.startsWith("#")) {
    return (
      <a className={classes} href={href} onClick={onClick} {...props}>
        {children}
      </a>
    );
  }

  if (href?.startsWith("/")) {
    return (
      <Link className={classes} to={href} onClick={onClick} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a className={classes} href={href} onClick={onClick} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick} type="button" {...props}>
      {children}
    </button>
  );
}
