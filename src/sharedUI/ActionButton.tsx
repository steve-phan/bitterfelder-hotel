import React from "react";
import Link from "next/link";
import cn from "classnames";

interface ActionButtonProps {
  title: string;
  to: string;
  isDynamicButton?: boolean | undefined;
}

export const ActionButton = ({
  title,
  to,
  isDynamicButton,
}: ActionButtonProps) => {
  return (
    <div className={cn("inline-flexrounded-md", isDynamicButton && "w-full")}>
      <Link
        href={to}
        className={cn(
          "inline-flex items-center justify-center border-transparent bg-primary-600 px-5 py-3 text-base font-medium text-white hover:bg-primary-700 uppercase",
          isDynamicButton
            ? "w-full md:rounded-md md:border"
            : "rounded-md border"
        )}
      >
        {title}
      </Link>
    </div>
  );
};
