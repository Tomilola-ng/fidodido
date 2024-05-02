import Link from 'next/link';

export const Navbar = ({MENU_LINKS} : {MENU_LINKS: any}) => {
  return (
    <div className="md:hidden border-b w-full" >
        {MENU_LINKS.map((item: any) => (
          <Link href={item.url} key={item.url} className="py-3 pl-4 border-b hover:textBg transition-all block" >
            {item.label}
          </Link>
        ))}
      </div>
  );
};
