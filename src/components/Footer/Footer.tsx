import React from "react";

export const Footer = () => {
  return (
    <div className="h-12 text-center">
      <span className="font-medium">
        {`© ${new Date().getFullYear()} Bitterfelder Hotel Group. `}
      </span>
      Alle Rechte vorbehalten.
    </div>
  );
};
