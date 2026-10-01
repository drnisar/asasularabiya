import React from "react";
import { getCurrentUser } from "@/lib/auth/session";

const PageTest = async () => {
  const user = await getCurrentUser();
  const url = process.env.DATABASE_URL;
  console.log("Database URL:", url);
  return (
    <>
      <div>PageTest</div>
      <div dir="ltr">{user ? `Hello, ${user.name}` : "Not logged in"}</div>
    </>
  );
};

export default PageTest;
