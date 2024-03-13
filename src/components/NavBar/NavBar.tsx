import Link from "next/link";
import NavBarLinks from "./NavBarLinks";

export default function NavBar() {
  const links = [
    {
      href: "/about",
      title: "About",
    },
    {
      href: "/contact",
      title: "Contact",
    },
  ];
  return (
    <nav className="sticky top-0 bg-primary/95 z-10">
      <div className="flex justify-between items-center m-auto p-8">
        <Link href={"/"} className="text-3xl text-background font-semibold">
          LOGO
        </Link>
        <NavBarLinks links={links} />
      </div>
    </nav>
  );
}
