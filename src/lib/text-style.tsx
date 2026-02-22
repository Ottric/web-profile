import * as React from "react";

export function formatCharacter(text: string) {
  if (text === " ") {
    return "\u00A0";
  }

  const bulky_italic = text.split(/(\*\*.*?\*\*|__.*?__|\n)/g).filter(Boolean);

  return bulky_italic.map((part, idx) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <b key={idx}>{part.slice(2, -2)}</b>;
    }
    if (part.startsWith("__") && part.endsWith("__")) {
      return <i key={idx}>{part.slice(2, -2)}</i>;
    }
    if (part === "\n") {
      return <br key={idx} />;
    }
    return <span key={idx}>{part}</span>;
  });
}
