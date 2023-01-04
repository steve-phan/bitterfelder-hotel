import Link from "next/link";
import React, { useState } from "react";

import { useSideBarScroll } from "@hooks/useSideBarScroll";
import { IconAccount } from "@Icons/IconAccount";
import { IconMenuClose } from "@Icons/IconMenuClose";
import { IconMenuOpen } from "@Icons/IconMenuOpen";
import { ActionButton } from "@sharedUI/ActionButton";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollParentRef } = useSideBarScroll({ isOpen });

  const handleToggle = () => setIsOpen(!isOpen);
  return (
    <div className="fixed z-50 top-0 left-0 right-0 max-w-full">
      <div className=" bg-white flex items-center justify-between px-5 py-4 max-w-full">
        <div className="flex gap-x-2 md:gap-x-4 md:text-xl">
          <div onClick={handleToggle}>
            {isOpen ? <IconMenuClose /> : <IconMenuOpen />}
          </div>
          <div>
            <Link href="/">Bitterfelder Hotel</Link>
          </div>
        </div>
        <div className="flex items-center gap-x-4 md:text-xl">
          <div className="flex">
            <IconAccount /> <span>Anmelden</span>
          </div>
          <div className="fixed w-full md:relative bottom-0 left-0 right-0 md:block">
            <ActionButton to="/reservations" title="Jeztz Buchen" />
          </div>
        </div>
        <div className="hidden" ref={scrollParentRef}>
          sidebar
        </div>
      </div>
    </div>
  );
};
