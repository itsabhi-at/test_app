"use client";
import { useState } from "react";
import { AiOutlineSearch, AiOutlineArrowRight } from "react-icons/ai";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
function SearchBar() {
  const [isINRMenuOpen, setIsINRMenuOpen] = useState(false);
  const handlerINRMenu = () => {
    setIsMaxMenuOpen(false);
    setIsIndiaMenuOpen(false);
    setIsMinMenuOpen(false);
    setIsINRMenuOpen((prev) => !prev);
  };
  const [isIndiaMenuOpen, setIsIndiaMenuOpen] = useState(false);
  const handlerIndiaMenu = () => {
    setIsINRMenuOpen(false);
    setIsMaxMenuOpen(false);
    setIsMinMenuOpen(false);
    setIsIndiaMenuOpen((prev) => !prev);
  };
  const [isMinMenuOpen, setIsMinMenuOpen] = useState(false);
  const handlerMinMenu = () => {
    setIsINRMenuOpen(false);
    setIsIndiaMenuOpen(false);
    setIsMaxMenuOpen(false);
    setIsMinMenuOpen((prev) => !prev);
  };
  const [isMaxMenuOpen, setIsMaxMenuOpen] = useState(false);
  const handlerMaxMenu = () => {
    setIsINRMenuOpen(false);
    setIsIndiaMenuOpen(false);
    setIsMinMenuOpen(false);
    setIsMaxMenuOpen((prev) => !prev);
  };
  return (
    <div className="bg-[#313131] min-h-[20vh] md:px-32 md:py-8 p-4">
      <p className="text-white font-bold text-sm">REWARDS EXPLORER</p>
      <div className="md:grid md:grid-cols-8 md:grid-rows-1  md:gap-x-4 md:gap-y-0 flex flex-col gap-4 py-4">
        <div className="md:col-span-3 row-span-1 relative shadow-slate-500">
          <input
            className="w-full h-full rounded-full py-4 pl-12 pr-4 md:placeholder:text-sm placeholder:text-[12px]"
            type="text"
            placeholder="Search 63 Indian Brand Rewards"
          />
          <AiOutlineSearch className="absolute top-5 left-5 text-lg text-[#333]" />
          <button className="absolute right-4 top-2 text-[10px] font-bold bg-yellow-400 py-3 pl-4 pr-12 rounded-full">
            SEARCH
            <span className=" absolute h-6 w-6 top-2 right-2 rounded-full bg-white flex items-center justify-center text-black hover:text-white hover:bg-black hover:translate-x-1 transition-all">
              <AiOutlineArrowRight />
            </span>
          </button>
        </div>
        {/* inr menu  */}
        <div
          onClick={handlerINRMenu}
          className="col-span-1 flex md:flex-row flex-col md:items-center items-start gap-2 cursor-pointer relative"
        >
          <p
            className={` ${
              isINRMenuOpen ? "text-yellow-400" : "text-white"
            } flex items-center gap-2`}
          >
            INR
            {isINRMenuOpen ? (
              <FaAngleUp className="text-yellow-400" />
            ) : (
              <FaAngleDown className="text-yellow-400" />
            )}
          </p>

          {isINRMenuOpen && (
            <div className="md:absolute relative text-white md:top-14 w-max left-0 p-4 bg-[#171717] md:bg-opacity-60 bg-opacity-100 shadow">
              <p className="mb-4">All Currencies</p>
              <div className="grid grid-cols-5 grid-rows-8 md:gap-x-24 gap-x-12 gap-y-4 text-sm">
                <p>INR</p>
                <p>INR</p>
                <p>INR</p>
                <p>INR</p>
                <p>INR</p>
                <p>INR</p>
                <p>INR</p>
                <p>INR</p>
                <p>INR</p>
                <p>INR</p>
                <p>INR</p>
              </div>
            </div>
          )}
        </div>
        {/* india menu  */}

        <div
          onClick={handlerIndiaMenu}
          className="col-span-1 flex md:flex-row flex-col md:items-center items-start gap-2 cursor-pointer relative"
        >
          <p
            className={` ${
              isIndiaMenuOpen ? "text-yellow-400" : "text-white"
            } flex items-center gap-2 `}
          >
            INDIA
            {isIndiaMenuOpen ? (
              <FaAngleUp className="text-yellow-400" />
            ) : (
              <FaAngleDown className="text-yellow-400" />
            )}
          </p>

          {isIndiaMenuOpen && (
            <div className="md:absolute relative text-white md:top-14 w-max left-0 p-4 bg-[#171717] md:bg-opacity-60 bg-opacity-100 shadow">
              <p className="mb-4">All Countries</p>
              <div className="grid grid-cols-5 grid-rows-8 md:gap-x-24 gap-x-12 gap-y-4 text-sm">
                <p>INR</p>
                <p>INR</p>
                <p>INR</p>
                <p>INR</p>
                <p>INR</p>
                <p>INR</p>
                <p>INR</p>
                <p>INR</p>
                <p>INR</p>
                <p>INR</p>
                <p>INR</p>
              </div>
            </div>
          )}
        </div>
        <div className="md:block hidden"></div>

        {/* min menu  */}
        <div
          onClick={handlerMinMenu}
          className="col-span-1 flex md:flex-row flex-col md:items-center items-start gap-2 cursor-pointer relative"
        >
          <p
            className={` ${
              isMinMenuOpen ? "text-yellow-400" : "text-white"
            } flex items-center gap-2 `}
          >
            MIN
            {isMinMenuOpen ? (
              <FaAngleUp className="text-yellow-400" />
            ) : (
              <FaAngleDown className="text-yellow-400" />
            )}
          </p>

          {isMinMenuOpen && (
            <div className="md:absolute relative text-white md:top-14 w-max left-0 p-4 bg-[#171717] md:bg-opacity-60 bg-opacity-100 shadow">
              <p className="mb-4">MIN</p>
              <div className="grid grid-cols-5 grid-rows-8 md:gap-x-24 gap-x-12 gap-y-4 text-sm">
                <p>INR</p>
                <p>INR</p>
                <p>INR</p>
                <p>INR</p>
                <p>INR</p>
                <p>INR</p>
                <p>INR</p>
                <p>INR</p>
                <p>INR</p>
                <p>INR</p>
                <p>INR</p>
              </div>
            </div>
          )}
        </div>
        {/* max menu  */}
        <div
          onClick={handlerMaxMenu}
          className="col-span-1 flex md:flex-row flex-col md:items-center items-start gap-2 cursor-pointer relative"
        >
          <p
            className={` ${
              isMaxMenuOpen ? "text-yellow-400" : "text-white"
            } flex items-center gap-2 `}
          >
            MAX
            {isMaxMenuOpen ? (
              <FaAngleUp className="text-yellow-400" />
            ) : (
              <FaAngleDown className="text-yellow-400" />
            )}
          </p>

          {isMaxMenuOpen && (
            <div className="md:absolute relative text-white md:top-14 w-max left-0 p-4 bg-[#171717] md:bg-opacity-60 bg-opacity-100 shadow">
              <p className="mb-4">MAX</p>
              <div className="grid grid-cols-5 grid-rows-8 md:gap-x-24 gap-x-12 gap-y-4 text-sm">
                <p>INR</p>
                <p>INR</p>
                <p>INR</p>
                <p>INR</p>
                <p>INR</p>
                <p>INR</p>
                <p>INR</p>
                <p>INR</p>
                <p>INR</p>
                <p>INR</p>
                <p>INR</p>
              </div>
            </div>
          )}
        </div>
      </div>
      <p className="text-white text-opacity-60 font-thin text-sm w-full text-center my-4">
        Browse 1744 global brands for bulk gift cards, prepaid cards, employee
        recognition, market research payments, promotional incentives,
        sweepstakes prizes and loyalty rewards.
      </p>
    </div>
  );
}

export default SearchBar;
