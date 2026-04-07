import Link from "next/link";
import Image from "next/image";

const links = [
  { name: "Home", href: "/" },
  { name: "Edit", href: "/edit" },
  {
    name: "Landing Page",
    href: "https://bsdc-computing.github.io/ComputerScienceLandingPage/",
  },
];

export default function NavBar() {
  return (
    <nav className="flex flex-row justify-between items-center mt-2 px-5 py-3 rounded-full w-full liquid-glass">
      <Image
        src="/logo.png"
        width="1047"
        height="530"
        alt="BSDC logo with hacker aesthetic"
        className="w-40"
      />
      <div aria-label="Links">
        {links.map((link) => (
          <Link key={link.name} href={link.href}>
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
