import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

type Section = {
  arabicTitle: string;
  slug: string;
};

interface Props {
  sections: Section[];
  slugPrefix: string;
  title: string;
}

const NavBarGeneric = ({ sections, slugPrefix, title }: Props) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="border-b border-stone-200 bg-stone-50 text-stone-900">
      <div className="mx-auto flex min-h-14 max-w-6xl items-center justify-between px-5 sm:px-8">
        <p className="font-serif text-base">{title}</p>
        <button
          aria-controls="generic-navigation"
          aria-expanded={isOpen}
          className="inline-flex items-center gap-2 py-3 text-sm font-semibold md:hidden"
          onClick={() => setIsOpen((open) => !open)}
          type="button"
        >
          Sections <span aria-hidden="true">{isOpen ? "−" : "+"}</span>
        </button>
        <nav
          className="hidden items-center gap-6 md:flex"
          aria-label={`${title} sections`}
        >
          {sections.map((section) => {
            const isActive =
              pathname === section.slug ||
              pathname.startsWith(`${slugPrefix}/${section.slug}/`);
            return (
              <Link
                aria-current={isActive ? "page" : undefined}
                className={`border-b-2 py-[17px] text-sm transition-colors ${isActive ? "border-orange-700 font-bold text-orange-800" : "border-transparent text-stone-600 hover:border-stone-400 hover:text-stone-950"}`}
                href={`${slugPrefix}/${section.slug}`}
                key={section.slug}
              >
                {section.arabicTitle}
              </Link>
            );
          })}
        </nav>
      </div>
      <nav
        className={`${isOpen ? "grid" : "hidden"} border-t border-stone-200 px-5 py-2 md:hidden`}
        id="generic-navigation"
        aria-label={`${title} sections`}
      >
        {sections.map((section) => {
          const isActive =
            pathname === section.slug ||
            pathname.startsWith(`${slugPrefix}/${section.slug}/`);
          return (
            <Link
              aria-current={isActive ? "page" : undefined}
              className={`border-l-2 px-4 py-3 text-sm ${isActive ? "border-orange-700 bg-orange-50 font-bold text-orange-800" : "border-transparent text-stone-700"}`}
              href={`${slugPrefix}/${section.slug}`}
              key={section.slug}
              onClick={() => setIsOpen(false)}
            >
              {section.arabicTitle}
            </Link>
          );
        })}
      </nav>
    </section>
  );
};

export default NavBarGeneric;
