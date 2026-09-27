"use client";
import { useRouter } from "next/navigation";
import { Button } from "@radix-ui/themes";

const GoBackButton = () => {
  const router = useRouter();
  return <Button onClick={() => router.back()}>Go Back</Button>;
};

export default GoBackButton;
