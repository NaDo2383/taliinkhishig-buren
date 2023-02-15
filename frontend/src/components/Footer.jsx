import React from "react";
import { Link } from "react-router-dom";
import Container from "./Container";

function Footer() {
  return (
    <footer className="bg-[#353B41]">
      <Container>
        <div className="py-4 md:pt-20 sm:py-6">
          <div className="flex xl:flex-row flex-col justify-evenly gap-5 py-10">
            <div className="mb-6 md:mb-0">
              <Link to="/" className="flex items-center ">
                <img
                  src="/images/logo1.png"
                  className="h-20 w-20 "
                  alt="Logo"
                />
                <span className="self-center text-white text-lg font-semibold">
                  TALIIN KHISHIG MINING
                </span>
              </Link>
            </div>
            <div className="flex flex-col md:flex-row gap-5">
              <div className="xl:flex xl:gap-10 w-full">
                <div>
                  <h2 className="mb-6 text-sm font-semibold uppercase text-white whitespace-nowrap">
                    For inquiries
                  </h2>
                  <ul className="text-slate-300">
                    <li className="mb-4">
                      <Link to="#" className="hover:underline">
                        Follow Taliin Khishig to stay up to date
                      </Link>
                    </li>
                    <li className="mb-4">
                      <Link to="#" className="hover:underline">
                        (+976) 7718-1188 <br /> Mail:tkh.mining@gmail.com
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 text-sm font-semibold uppercase text-white whitespace-normal">
                    Head Office
                  </h2>
                  <ul className="text-slate-300">
                    <li className="mb-4">
                      <Link to="#" className="hover:underline ">
                        Head Office Address
                      </Link>
                    </li>
                    <li className="mb-4">
                      <Link to="#" className="hover:underline ">
                        Sukhbaatar district, <br /> Ulaanbaatar  city Mongolia,<br />
                        Shangri-La office Level 11 <br /> Room 1110
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="md:border-l border-0 md:p-5 md:w-full p-3 left-2">
                <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                  Contact us
                </h2>
                <form className="text-slate-300 flex flex-col">
                  <div className="flex md:flex-row flex-col justify-between gap-4">
                    <label className="md:w-1/2 w-full">
                      Lastname*
                      <input
                        type="text"
                        className="outline-none border-1 border-[#FE7300] w-full text-black p-1 mb-3"
                      />
                    </label>
                    <label className="md:w-1/2 w-full">
                      Firstname*
                      <input
                        type="text"
                        className="outline-none border-1 border-[#FE7300] w-full text-black p-1 mb-3"
                      />
                    </label>
                  </div>
                  <div className="flex md:flex-row flex-col justify-between gap-4">
                    <label className="md:w-1/2 w-full">
                      Email*
                      <input
                        type="text"
                        className="outline-none border-1 border-[#FE7300] w-full text-black p-1 mb-3"
                      />
                    </label>
                    <label className="md:w-1/2 w-full">
                      SubTitle*
                      <input
                        type="text"
                        className="outline-none border-1 border-[#FE7300] w-full text-black p-1 mb-3"
                      />
                    </label>
                  </div>
                  <label className="w-full">
                    Message
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="3"
                      style={{ resize: 'none' }}
                      className="border-1 border-[#FE7300] outline-none text-black w-full p-1 mb-5"
                    ></textarea>
                  </label>
                  <button className="border-[#FE7200] mx-auto md:mx-0 text-white bg-[#FE7200] border-2 rounded-lg w-fit py-1 px-10">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
          <div className="flex sm:flex-row flex-col items-center sm:justify-between">
            <span className="text-sm sm:text-center text-gray-400  md:pb-0 pb-5">
              All rights reserved by ‘Taliin Khishig Mining LLC’ 2023
            </span>
            <span className="text-sm sm:text-center text-gray-400">
              Developed by Global Smart Systems LLC,
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
