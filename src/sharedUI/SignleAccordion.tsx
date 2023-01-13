import React, { ReactNode, useState } from "react";
import cn from "classnames";

import { IconArrowDown } from "@Icons/IconArrowDown";
import { IconArrowUp } from "@Icons/IconArrowUp";

interface AccordionProps {
  children: ReactNode;
  title: string;
  open?: boolean;
}

export const SignleAccordion = ({
  children,
  title,
  open = false,
}: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(open);
  return (
    <>
      <div
        className="flex justify-end items-center gap-1 cursor-pointer p-2 text-pink-600"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title} </span>
        {isOpen ? <IconArrowUp /> : <IconArrowDown />}
      </div>
      <div className={cn("", !isOpen && "hidden")}>{children}</div>
    </>
  );
};
