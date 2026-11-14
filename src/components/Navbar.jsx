import { useState } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Certs", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-4 inset-x-4 md:inset-x-0 md:mx-auto md:max-w-3xl z-50">
      <div className="glass rounded-full px-6 py-3 flex items-center justify-between">
        <a href="#" className="font-mono font-semibold text-neon">
          &lt;JA /&gt;
        </a>

        <ul className="hidden md:flex gap-6 text-sm text-slate-300">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-neon transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-neon text-xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <ul className="glass md:hidden mt-2 rounded-2xl p-4 flex flex-col gap-3 text-slate-200">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-1 hover:text-neon"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;