import { Heading } from "@radix-ui/themes";
import React from "react";
import GoBackButton from "./auth/_components/GoBackButton";
export default function NotFound() {
  return (
    <main dir="ltr">
      <div className="flex flex-col gap-4 items-center py-30">
        <Heading>Page Not Found</Heading>
        <Heading size={"3"}>
          The page you are looking for does not exist.
        </Heading>
        <GoBackButton />
        {/* <p>The page you are looking for does not exist.</p> */}
      </div>
    </main>
  );
}
