"use client";

import React from "react";
import { InputMask } from "primereact/inputmask";
import { useState } from "react";

interface IParams {
  type: "text" | "tel";
  placeholder?: string;
  mask?: string;
}

export const Input = (params: IParams) => {
  let [phoneNumber, setPhoneNumber] = useState("");

  switch (params.type) {
    case "tel":
      return (
        <InputMask
          type={params.type}
          value={phoneNumber}
          onChange={(event) => setPhoneNumber(String(event.target.value))}
          mask={params.mask || "+7 999 999 - 99 - 99"}
          placeholder={params.placeholder || "+7 ___ ___ - __ - __"}
          className="border-gray-input h-[78px] w-full grow text-ellipsis rounded-[10px] border border-solid bg-transparent p-[12px_16px] text-[21px] leading-[1em] tracking-[-0.21px] outline-none placeholder:text-black focus:border-black focus:outline-none max-lg:h-[58px] max-lg:text-[14px] max-lg:tracking-[-0.14px]"
        />
      );
    case "text":
      return (
        <input
          type={params.type}
          placeholder={params.placeholder || ""}
          maxLength={32}
          className="border-gray-input h-[78px] w-full grow text-ellipsis rounded-[10px] border border-solid bg-transparent p-[12px_16px] text-[21px] leading-[1em] tracking-[-0.21px] outline-none placeholder:text-black focus:border-black focus:outline-none max-lg:h-[58px] max-lg:text-[14px] max-lg:tracking-[-0.14px]"
        />
      );
  }
};
