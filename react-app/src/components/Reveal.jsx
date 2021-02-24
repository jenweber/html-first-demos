import React, { useState } from "react";

export default function Reveal({ children }) {
  const [shouldReveal, setShouldReveal] = useState(false);

  const handleClick = () => {
    setShouldReveal(!shouldReveal);
  };

  return (
    <p>
      What could be improved?
      <button onClick={handleClick} className="reveal" aria-expanded={shouldReveal}>
        {shouldReveal ? "Hide answer" : "Reveal answer"}
      </button>
      {shouldReveal && <p>{children}</p>}
    </p>
  );
}
