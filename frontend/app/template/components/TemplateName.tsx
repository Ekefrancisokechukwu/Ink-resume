"use client";

import { useState, useRef, useEffect } from "react";

export default function TemplateName() {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const measureRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (measureRef.current && inputRef.current) {
      const width = measureRef.current.offsetWidth;
      inputRef.current.style.width = `${width + 4}px`;
    }
  }, [inputValue]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="relative inline-block">
      <input
        ref={inputRef}
        style={{ borderRadius: "3px" }}
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        className="peer  focus:ring-2  focus:ring-neutral-400/50 outline-none  hover:ring-neutral-200 hover:ring-1 px-1 py-[1px] min-w-[100px]  max-w-[23rem]"
        placeholder="Type here..."
      />
      <span
        ref={measureRef}
        className="invisible absolute top-0 left-0 whitespace-pre px-2"
        aria-hidden="true"
      >
        {inputValue || "Type here..."}
      </span>
    </div>
  );
}
