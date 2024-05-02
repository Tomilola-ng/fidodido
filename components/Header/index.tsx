"use client"

import { useState } from "react";
import { MenuSquareIcon } from "lucide-react";

import { Navbar } from "./Navbar";
import MenuLink from "./MenuLink";
import Logo from "../reusables/Logo";

import { MENU_LINKS } from "@/lib/constants";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!open);

  return (
    <>
      <header className="h-16 pSm py-3 border-b border-primary bg-light fixed top-0 left-0 w-full flexBetween">
        <Logo />

        <MenuSquareIcon onClick={toggleOpen} className="text-primary md:hidden" size={28} />
      
        <div className="w-96 hidden md:flexBetween">
          {MENU_LINKS.map((item) => (
            <MenuLink key={item.url} label={item.label} url={item.url} />
          ))}
        </div>
      </header>

      <div className="h-16 w-full" />
      {isOpen && <Navbar MENU_LINKS={MENU_LINKS} />}
      <div id='gap' className="h-4 w-full" />
    </>
  );
}
