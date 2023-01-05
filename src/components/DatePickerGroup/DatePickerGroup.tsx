import React, { forwardRef, useState } from "react";
import DatePicker from "react-datepicker";
import { compareAsc, addDays } from "date-fns";

import { CalendarPickerWrapper } from "@sharedUI/CalendarPickerWrapper";

const CustomInput = (
  props: React.HTMLProps<HTMLButtonElement>,
  ref: React.Ref<HTMLButtonElement>
) => (
  <button className="flex-grow" onClick={props.onClick} ref={ref}>
    {props.value}
  </button>
);

const today = new Date();

export const DatePickerGroup = () => {
  const [startDate, setStartDate] = useState<Date | null>(today);
  const [endDate, setEndDate] = useState<Date | null>(startDate);
  return (
    <div className="wrap-datepickers px-3 py-6 flex gap-x-3 justify-center">
      <CalendarPickerWrapper label="Check-In">
        <DatePicker
          selected={startDate}
          onChange={(date) => {
            if (date) {
              setStartDate(date);
              if (endDate && compareAsc(date, endDate) !== -1) {
                setEndDate(addDays(date, 1));
              }
            }
          }}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          minDate={new Date()}
          customInput={React.createElement(forwardRef(CustomInput))}
        />
      </CalendarPickerWrapper>
      <CalendarPickerWrapper label="Check-Out">
        <DatePicker
          selected={endDate}
          onChange={(date) => {
            if (date) {
              setEndDate(date);
            }
          }}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          customInput={React.createElement(forwardRef(CustomInput))}
        />
      </CalendarPickerWrapper>
    </div>
  );
};
