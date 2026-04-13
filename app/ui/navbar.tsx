"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";

const links = [
  { name: "Home", href: "/" },
  { name: "Edit", href: "/edit" },
  {
    name: "Landing Page",
    href: "https://bsdc-computing.github.io/ComputerScienceLandingPage/",
  },
];

export default function NavBar() {
  const pathname = usePathname();
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const [hovered, setHovered] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<Map<string, HTMLAnchorElement>>(new Map());

  const activeHref =
    hovered ?? links.find((l) => l.href === pathname)?.href ?? null;

  useEffect(() => {
    if (!activeHref) return;
    const el = linkRefs.current.get(activeHref);
    const container = navRef.current;
    if (!el || !container) return;

    const elRect = el.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    setIndicatorStyle({
      width: elRect.width,
      transform: `translateX(${elRect.left - containerRect.left - 9}px)`,
    });
  }, [activeHref]);

  return (
    <nav className="top-3 right-4 left-4 z-10 fixed flex justify-between items-center backdrop-blur-md px-5 rounded-full h-20 liquid-glass">
      <Image
        src="/logo.png"
        width={1047}
        height={530}
        alt="BSDC logo"
        className="w-auto h-15"
        loading="eager"
      />
      <div
        ref={navRef}
        aria-label="Navigation links"
        className="relative flex gap-1 p-2 rounded-full liquid-glass"
      >
        {activeHref && (
          <div
            className="top-2 bottom-2 absolute bg-green-400/15 border border-green-400/25 rounded-full transition-all duration-300 ease-in-out pointer-events-none"
            style={indicatorStyle}
          />
        )}

        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            ref={(el) => {
              if (el) linkRefs.current.set(link.href, el);
            }}
            onMouseEnter={() => setHovered(link.href)}
            onMouseLeave={() => setHovered(null)}
            className={`
              relative px-4 py-1.5 rounded-full z-10
              text-xl font-medium
              transition-colors duration-200
              ${pathname === link.href ? "text-green-300" : "text-white hover:text-green-300"}
            `}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
