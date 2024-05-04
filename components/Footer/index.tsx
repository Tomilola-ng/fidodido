import Link from "next/link";
import Logo from "../reusables/Logo";
import { MENU_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer
      role="navigation"
      className="w-full bg-neutral-900 py-8 md:px-8 mt-6 text-neutral-100"
    >
      <div className="maxContainer grid md:grid-cols-3 gap-y-6 pSm">
        <Logo />
        <div className="flex flex-col gap-y-2 text-sm">
          <b>Company</b>
          We are a company dedicated to helping African startups thrive in the
          global market
        </div>
        <div className="flex flex-col gap-y-2 text-sm">
          <b>Resources</b>
          {MENU_LINKS.map((item) => (
            <Link href={item.url} key={item.label}>
              {item.label}
            </Link>
          ))}
        </div>
        <hr className="h-4 md:col-span-3 mt-6" />
        <div className="flexCenter text-sm md:col-span-3">
          Copyright © 2024. Fido Ltd
        </div>
      </div>
    </footer>
  );
}
