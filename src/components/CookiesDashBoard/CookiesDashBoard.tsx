import React, { useState } from "react";
import { useCookies } from "react-cookie";
import CryptoJS from "crypto-js";

/**
 *  NOTE: This is ONLY placeholder version.
 *  @todo: Implement some logic when needed
 *
 */

const decryptCookies = (encryptedCookieValue: string | undefined) => {
  if (!encryptedCookieValue) {
    return false;
  }
  return CryptoJS.AES.decrypt(encryptedCookieValue, SUPER_SECRET).toString(
    CryptoJS.enc.Utf8
  );
};

const SUPER_SECRET = "super_secret";
const DEFAULT_VALUE = "default some value";

export const CookiesDashBoard = () => {
  const [cookies, setCookie] = useCookies(["defaultCookie"]);
  const [hidden, setHidden] = useState(cookies.defaultCookie);

  const handleAcceptCookie = () => {
    const encryptedCookieValue = CryptoJS.AES.encrypt(
      DEFAULT_VALUE,
      SUPER_SECRET
    ).toString();
    setHidden(true);
    setCookie("defaultCookie", encryptedCookieValue);
  };

  if (hidden) {
    return <></>;
  }

  return (
    <div
      className="fixed bg-overlay inset-0 bottom-10 md:bottom-0"
      onClick={() => setHidden(true)}
    >
      <div className="w-full p-3 absolute bottom-0 bg-white md:flex md:justify-between xl:px-40">
        <div className="text-center">
          Diese Website verwendet Cookies, um die Funktionen der Website zu
          verbessern, die Nutzung der Website zu analysieren
        </div>
        <button
          className="bg-red-600 text-white px-3 rounded block mx-auto mt-2 md:mx-0"
          onClick={handleAcceptCookie}
        >
          AKZEPTIEREN
        </button>
      </div>
    </div>
  );
};
