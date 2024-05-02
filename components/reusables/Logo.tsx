import Link from "next/link";
import Image from "next/image";

import logoImg from "/public/logo.svg";

export default function Logo() {
  return (
    <Link href="/">
      <Image src={logoImg} alt="Fido" className="w-14 md:w-18" />
    </Link>
  );
}
