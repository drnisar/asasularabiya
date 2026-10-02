"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavBarDropdown from "./NavBarDropdown";
import type { Subject } from "@prisma/client";

interface Props {
  subjects: Subject[];
  currentUser: {
    id: number;
    name: string;
    email: string;
    role: string;
  };
}

const NavBar = ({ subjects, currentUser }: Props) => {
  const pathname = usePathname();

  return (
    <div className="flex justify-between bg-slate-200 p-4">
      <Link
        className="font-serif text-xl font-semibold tracking-wide"
        href="/course"
      >
        ASAS <span className="text-orange-700">AL ARABIYA</span>
      </Link>
      <div className="flex justify-between gap-18 ">
        <nav className="flex space-x-4">
          {subjects.map((subject) => {
            const isActive =
              pathname === `/course/${subject.slug}` ||
              pathname.startsWith(`/course/${subject.slug}/`);
            return (
              <Link
                key={subject.id}
                href={`/course/${subject.slug}`}
                className={`border-b-2 px-3  text-sm transition-colors ${isActive ? "border-orange-700 font-bold text-orange-800" : "border-transparent text-stone-600 hover:border-stone-400 hover:text-stone-950"}`}
              >
                {subject.arabic}
              </Link>
            );
          })}
        </nav>
        <NavBarDropdown currentUser={currentUser} />
      </div>
    </div>
  );
};

export default NavBar;
