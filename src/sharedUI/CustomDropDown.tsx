import { IValues } from "@components/RoomDetails/RoomDetails";
import { Dropdown, Badge } from "flowbite-react";
import React, { forwardRef, ReactNode, useState } from "react";

export type Ref = HTMLSelectElement;

type Values<T> = T[keyof T];

export const TYPES_OF_GUEST = {
  ADULT: "Erwachsene",
  KID: "Kinder",
  ROOM: "Zimmer",
} as const;

type TLabel = Values<typeof TYPES_OF_GUEST>;

interface ISelectProps {
  label: TLabel;
  number: number;
  requireValue?: boolean | undefined;
  max_guests?: number;
  avaiableSlots?: number;
  values: IValues;

  onChange: (value: number) => void;
}

export const getLabel = (value: IValues, label: TLabel) => {
  const labelMapping = {
    [TYPES_OF_GUEST.ADULT]: (
      <Badge color="info" size="md">
        {TYPES_OF_GUEST.ADULT}: {value[label]}
      </Badge>
    ),
    [TYPES_OF_GUEST.KID]: (
      <Badge color="success" size="md">
        {TYPES_OF_GUEST.KID}: {value[label]}
      </Badge>
    ),
    [TYPES_OF_GUEST.ROOM]: (
      <Badge color="warning" size="md">
        {TYPES_OF_GUEST.ROOM}: {value[label]}
      </Badge>
    ),
  };
  return labelMapping[label];
};

export function CustomDropDown({
  label,
  number,
  requireValue,
  max_guests,
  avaiableSlots,
  values,
  onChange,
}: ISelectProps) {
  const labelValues = `${label}: ${values[label]} `;
  return (
    <Dropdown
      label={getLabel(values, label)}
      // size="sm"
      arrowIcon={false}
      inline={true}
    >
      {Array(max_guests || number)
        .fill("")
        .map((_, index) => {
          const value = requireValue ? index + 1 : index;
          let disable = false;
          if (label === "Erwachsene" && value > (avaiableSlots || 0) + 1) {
            disable = true;
          }

          if (label === "Kinder" && value > (avaiableSlots || 0)) {
            disable = true;
          }

          return (
            <Dropdown.Item
              key={index}
              onClick={() => {
                onChange(value);
              }}
            >
              {value}
            </Dropdown.Item>
          );
        })}
    </Dropdown>
  );
}

// export const SelectNumber = forwardRef<Ref, ISelectProps>(function CustomSelect(
//   { label, number, requireValue, max_guests, avaiableSlots, onChange },
//   ref
// ) {
//   return (
//     <div className="w-16">
//       <label
//         htmlFor={label}
//         className="block text-xs text-center font-medium text-gray-900 dark:text-white"
//       >
//         {label}
//       </label>
//       <select
//         id={label}
//         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 "
//         onChange={onChange}
//         ref={ref}
//       >
//         {Array(max_guests || number)
//           .fill("")
//           .map((_, index) => {
//             const value = requireValue ? index + 1 : index;
//             let disable = false;
//             if (label === "Erwachsene" && value > (avaiableSlots || 0) + 1) {
//               disable = true;
//             }

//             if (label === "Kinder" && value > (avaiableSlots || 0)) {
//               disable = true;
//             }

//             return (
//               <option
//                 key={index}
//                 value={value}
//                 disabled={disable}
//                 className="disabled:bg-slate-300"
//               >
//                 {value}
//               </option>
//             );
//           })}
//       </select>
//     </div>
//   );
// });
