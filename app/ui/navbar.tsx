import Link from "next/link";

const links = [
  { name: "Home", href: "/" },
  { name: "Edit", href: "/edit" },
  {
    name: "Landing Page",
    href: "https://bsdc-computing.github.io/ComputerScienceLandingPage/",
  },
];

export default function NavBar() {
  return <nav className="flex flex-row justify-between items-center"></nav>;
}
