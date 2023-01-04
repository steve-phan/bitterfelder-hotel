import React, { forwardRef, useState } from "react";
import DatePicker from "react-datepicker";
import { compareAsc } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";

import { CalendarPickerWrapper } from "@sharedUI/CalendarPickerWrapper";

const today = new Date();

const CustomInput = (
  props: React.HTMLProps<HTMLButtonElement>,
  ref: React.Ref<HTMLButtonElement>
) => (
  <button className="flex-grow" onClick={props.onClick} ref={ref}>
    {props.value}
  </button>
);

const Reservations = () => {
  const [startDate, setStartDate] = useState<Date | null>(today);
  const [endDate, setEndDate] = useState<Date | null>(startDate);
  return (
    <div>
      <div className="wrap-datepickers px-3 py-6 flex gap-x-3 justify-center">
        <CalendarPickerWrapper>
          <DatePicker
            selected={startDate}
            onChange={(date) => {
              setStartDate(date);
              if (date && endDate && compareAsc(date, endDate) !== -1) {
                setEndDate(date);
              }
            }}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            minDate={new Date()}
            customInput={React.createElement(forwardRef(CustomInput))}
          />
        </CalendarPickerWrapper>
        <CalendarPickerWrapper>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            customInput={React.createElement(forwardRef(CustomInput))}
          />
        </CalendarPickerWrapper>
      </div>
    </div>
  );
};
export default Reservations;
