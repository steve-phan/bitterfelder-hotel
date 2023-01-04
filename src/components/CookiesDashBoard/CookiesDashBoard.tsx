import React, { useState } from "react";
import { useCookies } from "react-cookie";

export const CookiesDashBoard = () => {
  const [hidden, setHidden] = useState(false);
  const [cookies, setCookie] = useCookies(["name", "age"]);

  if (hidden) {
    return <></>;
  }

  return (
    <div className="fixed bg-overlay inset-0">
      <div className="p-2 absolute bottom-0">
        <div>
          Diese Website verwendet Cookies, um die Funktionen der Website zu
          verbessern, die Nutzung der Website zu analysieren
        </div>
        <button
          className="bg-red-600 text-white px-3 rounded"
          onClick={() => {
            setHidden(true);
          }}
        >
          AKZEPTIEREN
        </button>
      </div>
    </div>
  );
};

export default function NameForm({ name, onChange }: any) {
  return (
    <div>
      <h1>What&apos;s your name?</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          placeholder="Enter your name"
          defaultValue={name}
          onChange={(e) => onChange(e.target.value)}
        />
      </form>
    </div>
  );
}
