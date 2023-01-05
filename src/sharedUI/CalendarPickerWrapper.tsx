import React from "react";

import { IconCalendar } from "@Icons/IconCalendar";

interface ICalendarPickerWrapperProps {
  children: React.ReactNode;
  label: string;
}

export const CalendarPickerWrapper = ({
  children,
  label,
}: ICalendarPickerWrapperProps) => {
  return (
    <div className="flex flex-col flex-grow items-center">
      <p className="w-full text-left p-2 text-sm">{label}</p>
      <div className="w-full h-10 flex flex-row flex-grow items-center border border-zinc-300 rounded-sm">
        <IconCalendar />
        {children}
      </div>
    </div>
  );
};
