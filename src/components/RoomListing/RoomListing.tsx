// @ts-ignore
//@ts-nocheck
import React from "react";

import { RoomDetails } from "@components/RoomDetails/RoomDetails";
import { IRoom, room_types } from "src/mock/rooms";

export const RoomListing = () => {
  return (
    <div className="bg-neutral-100 p-4">
      {room_types.map((room, index) => {
        return <RoomDetails key={index} {...room} />;
      })}
    </div>
  );
};
