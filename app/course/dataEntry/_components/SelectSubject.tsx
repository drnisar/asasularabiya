"use client";
import React from "react";
import { Select } from "@radix-ui/themes";
import { useRouter } from "next/navigation";

type selectObject = {
  id: number;
  arabic: string;
};
interface Props {
  selectObjects: selectObject[];
  defaultValue?: string;
  slug?: string;
  paramKey: string;
  clearSearchParams?: () => void;
}

const SelectSubject = ({ selectObjects, defaultValue, paramKey }: Props) => {
  const router = useRouter();
  return (
    <Select.Root
      defaultValue={defaultValue}
      onValueChange={(value) => {
        const url = new URL(window.location.href);
        url.searchParams.set(paramKey, value);
        // if (clearSearchParams) {
        //   clearSearchParams();
        // }
        router.push(url.pathname + url.search);
      }}
    >
      <Select.Trigger />
      <Select.Content>
        {selectObjects.map((subject) => (
          <Select.Item key={subject.id} value={subject.id.toString()}>
            {subject.arabic}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
};

export default SelectSubject;
