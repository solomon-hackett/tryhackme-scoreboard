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
    <nav className="top-2 right-0 left-0 z-10 fixed flex justify-between items-center backdrop-blur-md mx-2 px-5 rounded-4xl h-20 liquid-glass">
      <Image
        src="/logo.png"
        width="1047"
        height="530"
        alt="BSDC logo with hacker aesthetic"
        className="w-30"
      />
      <div
        aria-label="Links"
        className="flex gap-5 px-5 py-3 rounded-xl liquid-glass"
      >
        {links.map((link) => (
          <Link key={link.name} href={link.href} className="text-3xl">
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
