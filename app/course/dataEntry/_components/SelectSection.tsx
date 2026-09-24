"use client";
import React, { useState } from "react";
import { Select } from "@radix-ui/themes";
import { useRouter } from "next/navigation";

type selectObject = {
  id: number;
  title: string;
};
interface Props {
  selectObjects: selectObject[];
  defaultValue?: string;
  onChange: (value: string) => void;
}

const SelectSection = ({ selectObjects, defaultValue, onChange }: Props) => {
  const router = useRouter();

  return (
    <Select.Root
      defaultValue={defaultValue}
      onValueChange={(value) => {
        onChange(value);
      }}
    >
      <Select.Trigger />
      <Select.Content>
        {selectObjects.map((subject) => (
          <Select.Item key={subject.id} value={subject.id.toString()}>
            {subject.title}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
};

export default SelectSection;
