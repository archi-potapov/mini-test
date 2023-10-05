import React from "react";

export const Footer = () => {
  return (
    <footer className="max-md:mb-13 mb-[86px] flex w-full max-w-[1828px] flex-col gap-28 px-11 max-md:gap-10 max-md:px-2.5">
      <div className="h-12 max-md:h-auto">
        <div className="mb-5 flex items-center justify-between text-[21px] tracking-[-0.01em] max-md:mb-[9px] max-md:text-[14px]">
          <div className="h-1 w-1 rounded bg-white"></div>
          <a href="#main">Листать наверх</a>
        </div>
        <div className="border-gray-border h-1.5 w-full rounded-[0_0_2px_2px] border border-t-transparent"></div>
      </div>
      <div className="flex justify-between max-md:flex-col max-md:gap-[3.375rem]">
        <div className="flex gap-14 text-[36px] tracking-[-0.01em] max-xl:flex-col max-md:flex-col max-md:gap-5 max-md:text-[17px]">
          <a href="/" className="hidden text-[15px] max-md:inline">
            Karanikola.<span className="text-gray-selection-1">Studio</span>
          </a>
          <a href="tel:+79787652980">+7 978 76-52-980</a>
          <a href="/">Работы студии</a>
        </div>
        <div className="flex h-fit gap-1.5">
          <a
            href="/"
            target="_blank"
            className="bg-gray-button flex items-center rounded-[0.58em] px-[0.94em] py-[0.7em] text-[17px] tracking-[-0.01em] max-md:p-[0.85em] max-md:text-[14px]"
          >
            Behance
          </a>
          <a
            href="/"
            target="_blank"
            className="bg-gray-button flex items-center rounded-[0.58em] px-[0.94em] py-[0.7em] text-[17px] tracking-[-0.01em] max-md:p-[0.85em] max-md:text-[14px]"
          >
            Dprofile
          </a>
          <a
            href="/"
            target="_blank"
            className="bg-gray-button flex items-center rounded-[0.58em] px-[0.94em] py-[0.7em] text-[17px] tracking-[-0.01em] max-md:p-[0.85em] max-md:text-[14px]"
          >
            Instagram
          </a>
          <a
            href="/"
            target="_blank"
            className="bg-gray-button flex items-center rounded-[0.58em] px-[0.94em] py-[0.7em] text-[17px] tracking-[-0.01em] max-md:p-[0.85em] max-md:text-[14px]"
          >
            Telegram
          </a>
        </div>
      </div>
      <div className="text-gray-copyright flex justify-between text-[17px] max-md:flex-col max-md:gap-5 max-md:text-[14px]">
        <span>Евгений Караникола. все права защищены.</span>
        <span>©2023</span>
      </div>
    </footer>
  );
};
