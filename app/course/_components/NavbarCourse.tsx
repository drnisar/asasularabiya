"use client";

import { Role, User } from "@prisma/client";
import { Button } from "@radix-ui/themes";
import LogoutButton from "@/app/auth/_components/LogoutButton";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
// import subjects from "@/public/data/subjects.json";
// const courses = [
//   { href: "/course/hewarat", label: "الحوارات" },
//   { href: "/course/lughatularabiya", label: "اللغته العربيه" },
//   { href: "/course/qiratulrashida", label: "القراءة الراشدة" },
//   { href: "/course/tajweed", label: "التجويد" },
// ];
type Subject = {
  id: number;
  title: string;
  arabic: string;
  urdu: string;
  slug: string;
};

export type currentUser = {
  id: number | undefined;
  name: string | undefined;
  email: string | undefined;
  role: Role | undefined;
};
interface Props {
  subjects: Subject[];
  currentUser?: currentUser;
}
export default function NavbarCourse({ subjects, currentUser }: Props) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b border-stone-200 bg-white text-stone-900">
      <div className="mx-auto flex min-h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link
          className="font-serif text-xl font-semibold tracking-wide"
          href="/course"
        >
          ASAS <span className="text-orange-700">AL ARABIYA</span>
        </Link>
        <button
          aria-controls="course-navigation"
          aria-expanded={isOpen}
          className="inline-flex h-10 w-10 items-center justify-center text-stone-900 md:hidden"
          onClick={() => setIsOpen((open) => !open)}
          type="button"
        >
          <span className="sr-only">
            {isOpen ? "Close course navigation" : "Open course navigation"}
          </span>
          <span aria-hidden="true" className="text-2xl leading-none">
            {isOpen ? "×" : "☰"}
          </span>
        </button>
        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label="Course navigation"
        >
          {subjects.map((course) => {
            const isActive =
              pathname === `/course/${course.slug}` ||
              pathname.startsWith(`/course/${course.slug}/`);
            return (
              <Link
                aria-current={isActive ? "page" : undefined}
                className={`border-b-2 px-3 py-5 text-sm transition-colors ${isActive ? "border-orange-700 font-bold text-orange-800" : "border-transparent text-stone-600 hover:border-stone-400 hover:text-stone-950"}`}
                href={`/course/${course.slug}`}
                key={course.slug}
              >
                {course.arabic}
              </Link>
            );
          })}
        </nav>
      </div>
      <div className="flex justify-between">
        <nav
          className={`${isOpen ? "grid" : "hidden"} border-t border-stone-200 bg-stone-50 px-5 py-3 md:hidden`}
          id="course-navigation"
          aria-label="Course navigation"
        >
          {subjects.map((course) => {
            const isActive =
              pathname === `/course/${course.slug}` ||
              pathname.startsWith(`/course/${course.slug}/`);
            return (
              <Link
                aria-current={isActive ? "page" : undefined}
                className={`border-l-2 px-4 py-3 text-base ${isActive ? "border-orange-700 bg-orange-50 font-bold text-orange-800" : "border-transparent text-stone-700"}`}
                href={`/course/${course.slug}`}
                key={course.slug}
                onClick={() => setIsOpen(false)}
              >
                {course.arabic}
              </Link>
            );
          })}
        </nav>
        <nav>
          {!currentUser ? (
            <Link
              className="font-serif text-xl font-semibold tracking-wide"
              href="/auth/login"
            >
              Login
            </Link>
          ) : (
            <LogoutButton user={currentUser} />
          )}
        </nav>
      </div>
    </header>
  );
}
