import Link from "next/link";

export default function LinkBtn({ url, msg }: { url: string; msg: string }) {
  return (
    <Link href={url} className="textBg rounded px-3 py-1 block w-fit">
      {msg}
    </Link>
  );
}
