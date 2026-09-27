import Link from "next/link";
import React from "react";
import { getCurrentUser } from "@/lib/auth/session";

const AdminNavBar = async () => {
  const currentUser = await getCurrentUser();
  if (!currentUser || currentUser.role !== "ADMIN") {
    return null;
  }

  return (
    <div dir="ltr" className="flex items-center gap-4 p-4 bg-gray-100">
      <Link href="/">Home</Link>
      <Link href="/auth/users">Users</Link>
      <Link href="/auth/settings">Settings</Link>
    </div>
  );
};

export default AdminNavBar;
