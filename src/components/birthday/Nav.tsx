import { useEffect, useState } from "react";

const links = [
  { href: "#story", label: "Story" },
  { href: "#reasons", label: "Reasons" },
  { href: "#promises", label: "Promises" },
  { href: "#letter", label: "Letter" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-colors duration-500 ${
        scrolled ? "bg-ivory/80 backdrop-blur-md border-b border-gold/30" : "bg-transparent"
      }`}
      style={scrolled ? { borderBottomWidth: "0.5px" } : undefined}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-serif italic text-gold text-xl sm:text-2xl">
          28 Years of You
        </a>
        <nav className="flex items-center gap-5 sm:gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-espresso/80 hover:text-gold transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
