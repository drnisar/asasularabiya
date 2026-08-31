"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const sections = [
  { href: "/course/lughatularabiya/concepts", label: "Concepts" },
  { href: "/course/lughatularabiya/book1", label: "Book 1" },
  { href: "/course/lughatularabiya/book2", label: "Book 2" },
  { href: "/course/lughatularabiya/book3", label: "Book 3" },
];

export default function NavbarLughatulArabiya() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="border-b border-stone-200 bg-stone-50 text-stone-900">
      <div className="mx-auto flex min-h-14 max-w-6xl items-center justify-between px-5 sm:px-8">
        <p className="font-serif text-base">Lughatul Arabiya</p>
        <button aria-controls="lughatularabiya-navigation" aria-expanded={isOpen} className="inline-flex items-center gap-2 py-3 text-sm font-semibold md:hidden" onClick={() => setIsOpen((open) => !open)} type="button">
          Sections <span aria-hidden="true">{isOpen ? "−" : "+"}</span>
        </button>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Lughatul Arabiya sections">
          {sections.map((section) => {
            const isActive = pathname === section.href || pathname.startsWith(`${section.href}/`);
            return <Link aria-current={isActive ? "page" : undefined} className={`border-b-2 py-[17px] text-sm transition-colors ${isActive ? "border-orange-700 font-bold text-orange-800" : "border-transparent text-stone-600 hover:border-stone-400 hover:text-stone-950"}`} href={section.href} key={section.href}>{section.label}</Link>;
          })}
        </nav>
      </div>
      <nav className={`${isOpen ? "grid" : "hidden"} border-t border-stone-200 px-5 py-2 md:hidden`} id="lughatularabiya-navigation" aria-label="Lughatul Arabiya sections">
        {sections.map((section) => {
          const isActive = pathname === section.href || pathname.startsWith(`${section.href}/`);
          return <Link aria-current={isActive ? "page" : undefined} className={`border-l-2 px-4 py-3 text-sm ${isActive ? "border-orange-700 bg-orange-50 font-bold text-orange-800" : "border-transparent text-stone-700"}`} href={section.href} key={section.href} onClick={() => setIsOpen(false)}>{section.label}</Link>;
        })}
      </nav>
    </section>
  );
}