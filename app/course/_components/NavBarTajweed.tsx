"use client";
import tajweed from "@/public/data/tajweed.json";
import NavBarGeneric from "./NavBarGeneric";
const NavBarTajweed = () => {
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
