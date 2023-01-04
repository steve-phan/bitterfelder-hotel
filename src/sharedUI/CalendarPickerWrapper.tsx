import React from "react";

import { IconCalendar } from "@Icons/IconCalendar";

interface ICalendarPickerWrapperProps {
  children: React.ReactNode;
}

export const CalendarPickerWrapper = ({
  children,
}: ICalendarPickerWrapperProps) => {
  return (
    <div className="h-10 flex flex-row flex-grow items-center border border-zinc-300 rounded-sm">
      <IconCalendar />
      {children}
    </div>
  );
};
