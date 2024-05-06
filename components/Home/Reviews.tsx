import { REVIEWS } from "@/lib/constants";
import Image from "next/image";

export default function Reviews() {
  return (
    <section className="maxContainer pSm my-16">
      <div className="grid gap-4 gap-y-6 md:grid-cols-3">
        {REVIEWS.map((item, idx) => (
          <div key={idx} className="md:block flexCenter flex-col">
            <div className="w-16 h-16 relative rounded-full mb-2 overflow-hidden border border-primary">
              <Image
                src={item.image}
                alt={item.name + "person"}
                width={200}
                height={200}
                className="absolute h-full w-32 top-0 left-0"
              />
            </div>
            <b className="text-sm">{item.name}</b>
            <b className="px-2 text-sm">•</b>
            <i className="tex-primary text-sm font-light"> {item.company}</i>
            <p className="text-xs font-light text-neutral-800 text-center md:text-left">
              {item.comment}
            </p>
          </div>
        ))}
      </div>
      <hr className="border-primary h-4 mt-16" />
    </section>
  );
}
