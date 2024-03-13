import NavLink from "./NavBarLink";

interface NavBarLinksProps {
  links: { href: string; title: string }[];
}
export default function NavBarLinks({ links }: NavBarLinksProps) {
  return (
    <div className="menu hidden md:block md:w-auto text-background">
      <ul className="flex">
        {links.map((link) => (
          <li key={link.href}>
            <NavLink href={link.href} title={link.title} />
          </li>
        ))}
      </ul>
    </div>
  );
}
