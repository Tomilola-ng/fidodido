import Link from "next/link";

export default function MenuLink({
  url,
  label,
}: {
  url: string;
  label: string;
}) {
  return (
    <Link
      href={url}
      className="underline hover:decoration-primary decoration-transparent transition-all"
    >
      {label}
    </Link>
  );
}
