"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@radix-ui/themes";

const SignupSuccess = () => {
  const router = useRouter();

  return (
    <div dir="ltr" className="px-2 mx-auto my-30 max-w-sm border p-4 rounded">
      <h1>Signup Successful!</h1>
      <p>
        Your account has been created successfully. Your default role is
        STUDENT.
      </p>
      <Button onClick={() => router.push("/")}>Go to Home</Button>
    </div>
  );
};

export default SignupSuccess;
