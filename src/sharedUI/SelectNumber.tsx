import React, { useState } from "react";

interface ISelectProps {
  label: string;
  number: number;
  requireValue?: boolean | undefined;
  ref: React.MutableRefObject<HTMLSelectElement | null>;
}

export const SelectNumber = ({
  label,
  number,
  requireValue,
  ref,
}: ISelectProps) => {
  return (
    <div className="w-16">
      <label
        htmlFor={label}
        className="block text-xs text-center font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <select
        id={label}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 "
        onChange={(e) => {
          console.log({ e: e.target.value });
        }}
        ref={ref}
      >
        {Array(number)
          .fill("")
          .map((_, index) => {
            const value = index + 1;
            return (
              <option key={index} value={value}>
                {value}
              </option>
            );
          })}
      </select>
    </div>
  );
};
