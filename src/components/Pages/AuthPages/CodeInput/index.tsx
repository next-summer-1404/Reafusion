"use client";

import React, { useState, useRef, useEffect } from "react";

const CodeInput = ({ initialCode = ["", "", "", "", "", ""] }) => {
  const [code, setCode] = useState(initialCode);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]); // نوع قبلی رو نگه می‌داریم

  const handleChange = (i: number, value: string) => {
    console.log(`Input ${i} changed to:`, value); // دیباگ
    if (/^\d?$/.test(value)) {
      const newCode = [...code];
      newCode[i] = value;
      setCode(newCode);

      if (value && i < 5) {
        inputRefs.current[i + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (i: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !code[i] && i > 0) {
      inputRefs.current[i - 1]?.focus();
    } else if (e.key === "ArrowLeft" && i > 0) {
      e.preventDefault();
      inputRefs.current[i - 1]?.focus();
    } else if (e.key === "ArrowRight" && i < 5) {
      e.preventDefault();
      inputRefs.current[i + 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLDivElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, 6).replace(/\D/g, '');
    const newCode = pastedData.padEnd(6, '').split('').slice(0, 6);
    setCode(newCode);
    if (newCode[5]) {
      inputRefs.current[5]?.focus();
    }
  };

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  return (
    <div className="w-full flex justify-between" dir="ltr" onPaste={handlePaste}>
      {code.map((value, i) => (
        <input
          ref={(el: HTMLInputElement | null) => {
            inputRefs.current[i] = el; // تخصیص ساده بدون بازگشت مقدار
          }}
          key={i}
          id={`code${i}`}
          type="text"
          inputMode="numeric"
          autoComplete="off"
          name={`code${i}`}
          maxLength={1}
          value={value}
          onChange={(e) => handleChange(i, e.target.value)}
          onKeyDown={(e) => handleKeyDown(i, e)}
          className="outline-0 bg-[#F5F5F5] w-[50px] h-[50px] text-center rounded-[40px] text-xl border border-[#DDDDDD] focus:border-blue-500 focus:outline-none"
        />
      ))}
    </div>
  );
};

export default CodeInput;