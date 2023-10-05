import React from "react";
import Image from "next/image";
import { Input } from "./Input/Input";

export const Main = () => {
  return (
    <main
      id={"main"}
      className="mb-[202px] w-full max-w-[1828px] px-[46px] max-md:mb-[60px] max-md:px-[10px]"
    >
      <section className="flex w-full justify-between overflow-hidden rounded-[10px] bg-[#E7E7E7]">
        <div className="flex w-[680px] items-end bg-[#0a0b0d] max-xl:hidden">
          <Image
            src="/images/authorPhoto.png"
            alt="Author Photo"
            width={525}
            height={687}
          />
        </div>
        <div className="flex w-auto grow flex-col gap-[112px] p-[142px_56px] max-md:gap-[20px] max-md:p-[40px_15px]">
          <h2 className="max-w-[808px] text-[36px] leading-[1em] tracking-[-0.01em] text-black max-lg:max-w-[87%] max-md:text-[21px]">
            Если у вас есть{" "}
            <span className="text-gray-selection">
              общий запрос или запрос по проекту, пожалуйста, напишите мне
            </span>{" "}
            по электронной почте или заполните форму — доступна сейчас.
          </h2>
          <form
            action=""
            name="application form"
            autoComplete="on"
            className="flex flex-col gap-[56px] text-black max-md:gap-[10px]"
          >
            <div className="flex w-full justify-between gap-[10px] max-md:flex-col max-md:gap-[10px]">
              <Input type="name" />
              <Input type="tel" />
            </div>
            <button className="h-[78px] w-full rounded-[10px] bg-black p-[12px_16px] text-[21px] leading-[1em] tracking-[-0.21px] text-white max-md:h-[58px] max-md:text-[14px] max-md:tracking-[-0.14px]">
              Отправить заявку
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};
