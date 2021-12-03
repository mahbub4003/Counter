import React from "react";
export default function HoverCounter({ count, incrimentCount, theme }) {
  const style =
    theme == "dark" ? { backgroundColor: "#000000", color: "#ffffff" } : null;
  return (
    <div>
      <h1 onMouseOver={incrimentCount} style={style}>
        Hover {count} times
      </h1>
    </div>
  );
}
