"use client";

import { useState } from "react";

const links = [
  { href: "#ledger", label: "دفتر الأعمال" },
  { href: "#stack", label: "الأدوات" },
  { href: "#about", label: "نبذة" },
  { href: "#contact", label: "تواصل" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
        className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] rounded border border-rule"
      >
        <span
          className={`block h-px w-4 bg-ink transition-transform ${open ? "translate-y-[3px] rotate-45" : ""}`}
        />
        <span
          className={`block h-px w-4 bg-ink transition-opacity ${open ? "opacity-0" : ""}`}
        />
        <span
          className={`block h-px w-4 bg-ink transition-transform ${open ? "-translate-y-[3px] -rotate-45" : ""}`}
        />
      </button>

      {open && (
        <nav className="absolute inset-x-0 top-full border-b border-rule bg-paper px-6 py-4 shadow-sm">
          <ul className="flex flex-col gap-4 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-1 text-ink-2"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
