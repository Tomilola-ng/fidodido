import { BENEFITS } from "@/lib/constants";
import Benefit from "./Benefit";

export default function About() {
  return (
    <section className="maxContainer pSm my-16">
      <hr className="border-primary h-4" />
      <div className="grid gap-3 gap-y-6 md:grid-cols-3">
        {BENEFITS.map((item, idx) => (
          <Benefit key={idx} {...item} />
        ))}
      </div>
    </section>
  );
}
