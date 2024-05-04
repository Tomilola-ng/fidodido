import {
  BookIcon,
  GlobeIcon,
  ZapIcon,
  SendIcon,
  UnplugIcon,
  UsersRoundIcon,
} from "lucide-react";

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
      {icon === "UsersRoundIcon" && <UsersRoundIcon size={28} />}
      {icon === "GlobeIcon" && <GlobeIcon size={28} />}
      {icon === "ZapIcon" && <ZapIcon size={28} />}
      {icon === "SendIcon" && <SendIcon size={28} />}
      {icon === "UnPlugIcon" && <UnplugIcon size={28} />}
      <h4 className="font-bold">{heading}</h4>
      <p className="text-sm font-light text-neutral-800">{desc}</p>
    </figure>
  );
}
