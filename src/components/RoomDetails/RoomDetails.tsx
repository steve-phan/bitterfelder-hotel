import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

import type { IRoom } from "src/mock/rooms";

import { IconGuest } from "@Icons/IconGuest";
import { CustomDropDown, TYPES_OF_GUEST } from "@sharedUI/CustomDropDown";
import { Accordion } from "flowbite-react";
import { IconArrowDown } from "@Icons/IconArrowDown";

const defaultValues: IValues = {
  [TYPES_OF_GUEST.ADULT]: 1,
  [TYPES_OF_GUEST.KID]: 0,
  [TYPES_OF_GUEST.ROOM]: 1,
};

export interface IValues {
  [TYPES_OF_GUEST.ADULT]: number;
  [TYPES_OF_GUEST.KID]: number;
  [TYPES_OF_GUEST.ROOM]: number;
}

export const RoomDetails = ({
  room_type_desc,
  room_type_title,
  num_available_now,
  max_guests: defaultMaxGuests,
  los_min,
  rate_min,
}: IRoom) => {
  const maxGuests = Number(defaultMaxGuests);

  const [avaiableSlots, setAvaiableSlots] = useState(maxGuests);
  const [values, setValues] = useState(defaultValues);

  const handleChange = (num: number) => {
    //@TODO: handle later
  };

  return (
    <div className="roomDetailsWrapper bg-white">
      <div className=" flex flex-col bg-white p-4 mt-4 md:flex-row md:justify-between md:gap-4">
        <div className="rd_image relative max-h-96 h-96 md:h-80 md:w-full md:max-w-xs lg:max-w-sm">
          <Image
            alt="Bitterfelder Hotel"
            src={`/background/Bitterfelder-Hotel-${
              Math.floor(Math.random() * 3) + 1
            }.jpg`}
            fill
            quality={45}
          />
        </div>
        <div className="rd_info flex flex-col justify-around flex-grow">
          <div className="rd-title text-2xl underline decoration-pink-600 py-2">
            <span>{room_type_title}</span>
          </div>
          <div className="rd-capacity flex justify-between p-2">
            <div className="rd-accupancy">
              <div>Maximale Belegung</div>
              <div className="flex items-center gap-0.5 text-slate-500">
                {Array(maxGuests)
                  .fill("")
                  .map((_, index) => {
                    return <IconGuest key={index} />;
                  })}
                {maxGuests}
              </div>
            </div>
            <div className="rd-minmax">
              <div>Mindestaufenthalt</div>
              <div className="text-sm text-right text-slate-500">
                {los_min} Nacht/Nächte
              </div>
            </div>
          </div>
          <div className="rd-price p-2">
            <div className="text-right text-sm">Preis von </div>
            <div className="flex justify-between">
              <div>Standardpreis</div>
              <div className="text-pink-600 font-bold">€{rate_min} </div>
            </div>
          </div>

          <div className="rd-actions-group p-2 flex flex-col-reverse lg:flex-row justify-between items-center gap-4">
            <div className="flex gap-2 w-full justify-end">
              <CustomDropDown
                label={TYPES_OF_GUEST.ADULT}
                requireValue
                number={maxGuests}
                onChange={handleChange}
                max_guests={maxGuests}
                avaiableSlots={avaiableSlots}
                values={values}
              />
              {maxGuests !== 1 && (
                <CustomDropDown
                  label={TYPES_OF_GUEST.KID}
                  number={maxGuests}
                  onChange={handleChange}
                  max_guests={maxGuests}
                  avaiableSlots={avaiableSlots}
                  values={values}
                />
              )}
              <CustomDropDown
                label={TYPES_OF_GUEST.ROOM}
                requireValue
                number={num_available_now}
                onChange={handleChange}
                values={values}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full p-2">
        <Accordion.Panel
          arrowIcon={() => <IconArrowDown />}
          alwaysOpen={true}
          className="justify-end gap-2"
        >
          <Accordion.Title className="text-sm   px-1 py-1 gap-2 justify-end flex-grow-0 w-fit ml-auto">
            Details anzeigen
          </Accordion.Title>
          <Accordion.Content>Content</Accordion.Content>
        </Accordion.Panel>
      </div>
    </div>
  );
};
