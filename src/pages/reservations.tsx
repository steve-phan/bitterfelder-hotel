import React from "react";

import "react-datepicker/dist/react-datepicker.css";

import { DatePickerGroup } from "@components/DatePickerGroup/DatePickerGroup";
import { RoomListing } from "@components/RoomListing/RoomListing";

const Reservations = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <DatePickerGroup />
      <RoomListing />
    </div>
  );
};
export default Reservations;
