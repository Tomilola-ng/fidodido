import Image from "next/image";
import fidoGuy from "/public/char.webp";

export default function ShowCase() {
  return (
    <section className="bg-primary w-full pSm mb-16 py-8">
      <div className="grid md:grid-cols-2 gap-8 items-center w-full max-w-[850px] mx-auto my-6">
        <Image src={fidoGuy} alt="FIDO DIDO" className="constrast" />
        <div className="text-xl font-bold text-white">
          We help you train your team into formidable employees, spanning
          different business sectors.
        </div>
      </div>
    </section>
  );
}
