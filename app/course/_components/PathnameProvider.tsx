"use client";
import { usePathname } from "next/navigation";

const PathnameProvider = () => {
  const pathname = usePathname();
  return <>{pathname}</>;
};

export default PathnameProvider;
