"use client";

import { useState } from "react";

import { PlusIcon } from "@/components/icons/PlusIcon";

interface QuestionProps {
  description?: React.ReactNode;
  title?: string;
}
export function Question({ title, description }: QuestionProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <button
        className="bg-[rgb(45_45_45)] hover:bg-[rgb(65_65_65)] flex items-center justify-between p-6 w-full"
        onClick={handleClick}
      >
        {title ? <p className="text-2xl font-bold">{title}</p> : null}
        <PlusIcon
          className={`${isOpen ? "rotate-45" : ""} transition-transform`}
        />
      </button>

      {isOpen ? (
        <article className="bg-[rgb(45_45_45)] p-6 -mt-[7px]">
          {description}
        </article>
      ) : null}
    </>
  );
}
