import Image from "next/image";
import LinkBtn from "../reusables/LinkBtn";

import fidoGuy from "/public/character.webp";

export default function Hero() {
  return (
    <section className="grid md:grid-cols-2 gap-8 items-center w-full max-w-screen-md mx-auto my-6">
      <div className="gap-y-4 flexCenter md:items-start flex-col">
        <h1 className="text-3xl md:text-4xl font-bold text-balance leading-8 text-center md:text-left">
          We are the business associate you need.
        </h1>
        <p className="text-pretty text-center md:text-left">
          We help you take care of your business Legals, Accounts, Marketing and
          Even Technical product development
        </p>
        <LinkBtn
          msg="Book a Session"
          url="https://calendly.com/fidoafrica/consultation"
        />
      </div>
      <div className="">
        <Image src={fidoGuy} alt="FIDO DIDO" />
      </div>
    </section>
  );
}
