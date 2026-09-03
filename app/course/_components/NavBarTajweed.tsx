"use client";
import React from "react";
import { Flex } from "@radix-ui/themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import tajweed from "@/public/data/tajweed.json";
import NavBarGeneric from "./NavBarGeneric";
const NavBarTajweed = () => {
  const pathname = usePathname();
  return (
    <>
      <NavBarGeneric
        slugPrefix="/course/tajweed"
        sections={tajweed.divisions}
        title="تجوید مینو"
      />
    </>
  );
};

export default NavBarTajweed;
