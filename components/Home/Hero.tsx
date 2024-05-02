import Image from "next/image";
import LinkBtn from "../reusables/LinkBtn";

import fidoGirl from "/public/character.png";

export default function Hero() {
  return (
    <section className="grid md:grid-cols-2 gap-8 items-center w-full max-w-screen-md mx-auto mt-6">
      <div className="gap-y-4 flexCenter md:block flex-col">
        <h1 className="text-3xl md:text-4xl font-bold text-balance leading-8 text-center md:text-left">
          We are the business associate you need.
        </h1>
        <p className="text-pretty text-center md:text-left">
          We help you take care of your business Legals, Accounts, Marketing and
          Even Technical product development
        </p>
        <LinkBtn msg="Book a Session" url="/" />
      </div>
      <div className="">
        <Image src={fidoGirl} alt="FIDO GIRL" />
      </div>
    </section>
  );
}
