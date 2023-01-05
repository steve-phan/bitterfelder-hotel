import Image from "next/image";
import React from "react";

import { IconGuest } from "@Icons/IconGuest";

import type { IRoom } from "src/mock/rooms";

export const RoomDetails = ({
  room_type_desc,
  room_type_title,
  max_guests,
  los_min,
  rate_min,
}: IRoom) => {
  return (
    <div className="roomDetailsWrapper flex flex-col bg-white p-4 mt-4">
      <div className="rd_image relative max-h-96 h-96">
        <Image
          alt="Bitterfelder Hotel"
          src={`/background/Bitterfelder-Hotel-${
            Math.floor(Math.random() * 3) + 1
          }.jpg`}
          fill
          quality={45}
        />
      </div>
      <div className="rd_info">
        <div className="rd-title text-2xl underline decoration-pink-600 py-2">
          <span>{room_type_title}</span>
        </div>
        <div className="rd-capacity flex justify-between p-2">
          <div className="rd-accupancy">
            <div>Maximale Belegung</div>
            <div className="flex items-center gap-0.5 text-slate-500">
              {Array(Number(max_guests))
                .fill("")
                .map((_, index) => {
                  return <IconGuest key={index} />;
                })}
              {max_guests}
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
          <div className="text-right">Preis von </div>
          <div className="flex justify-between">
            <div>Standardpreis</div>
            <div className="text-pink-600 font-bold">€{rate_min} </div>
          </div>
        </div>
      </div>
    </div>
  );
};
