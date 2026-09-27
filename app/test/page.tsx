import React from "react";
import { getCurrentUser } from "@/lib/auth/session";

const PageTest = async () => {
  const user = await getCurrentUser();
  return (
    <>
      <div>PageTest</div>
      <div dir="ltr">{user ? `Hello, ${user.name}` : "Not logged in"}</div>
    </>
  );
};

export default PageTest;
