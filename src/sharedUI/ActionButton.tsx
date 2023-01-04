import React from "react";
import Link from "next/link";

interface ActionButtonProps {
  title: string;
  to: string;
}

export const ActionButton = ({ title, to }: ActionButtonProps) => {
  return (
    <div className="inline-flex rounded-md shadow">
      <Link
        href={to}
        className="inline-flex items-center justify-center rounded-md border border-transparent bg-primary-600 px-5 py-3 text-base font-medium text-white hover:bg-primary-700 uppercase"
      >
        {title}
      </Link>
    </div>
  );
};
