import { ActionButton } from "@sharedUI/ActionButton";
import React from "react";
import { Kalam } from "@next/font/google";
import cn from "classnames";

const fontKalam = Kalam({
  weight: "700",
  subsets: ["latin"],
});

export const HomePageIntro = () => {
  return (
    <div className="max-w-5xl mx-auto py-10">
      <div className="text-center">
        <h1 className={cn("my-14 text-5xl", fontKalam.className)}>
          Willkommen im Hotel Bitterfelder Hof
        </h1>
        <p className="text-2xl mb-14">
          Entdecken Sie stilvolle Zimmer, authentische Gerichte und ein gewagtes
          Storytelling-Konzept. Unser Standort im pulsierenden Herzen der
          Bitterfeld-Wolfen bietet Ihnen den perfekten Ausgangspunkt, damit Sie
          das echte Berlin erkunden und finden können, nämlich Ihr
          Bitterfeld-Wolfen.
        </p>

        <ActionButton to="/sign-in" title="Anmelden" />
      </div>
    </div>
  );
};
