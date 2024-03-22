import Link from "next/link";
import Humberger from "./Humburger";

export default function NavBar() {
  const links = [
    {
      href: "/#about",
      title: "About",
    },
    {
      href: "/#contact",
      title: "Contact",
    },
    {
      href: "/test",
      title: "Test"
    }
  ];
  return (
    <nav className="sticky top-0 bg-primary/95 z-10 shadow-lg max-h-[20vh]">
      <div className="flex justify-between items-center m-auto p-8 relative">
        <Link href={"/"} className="text-3xl text-background font-semibold">
          LOGO
        </Link>
        <Humberger navLinks={links} />
      </div>
    </nav>
  );
}
