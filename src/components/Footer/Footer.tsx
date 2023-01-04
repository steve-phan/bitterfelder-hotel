import React from "react";

export const Footer = () => {
  return (
    <div className="h-12 text-center md:flex items-center justify-center gap-4">
      <span className="font-medium block">
        {`© ${new Date().getFullYear()} Bitterfelder Hotel Group. `}
      </span>
      <span> Alle Rechte vorbehalten.</span>
    </div>
  );
};
