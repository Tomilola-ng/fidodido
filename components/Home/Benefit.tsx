import { BookIcon, ScaleIcon, GlobeIcon } from "lucide-react";

export default function Benefit({
  heading,
  desc,
  icon,
}: {
  heading: string;
  desc: string;
  icon: string;
}) {
  return (
    <figure className="grid gap-y-2">
      {icon === "BookIcon" && <BookIcon size={28} />}
      {icon === "ScaleIcon" && <ScaleIcon size={28} />}
      {icon === "GlobeIcon" && <GlobeIcon size={28} />}
      <h4 className="font-bold">{heading}</h4>
      <p className="text-sm font-light text-neutral-800">{desc}</p>
    </figure>
  );
}
