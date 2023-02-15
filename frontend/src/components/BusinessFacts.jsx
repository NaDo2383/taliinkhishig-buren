import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";

function BusinessFacts() {
    function Number({ n }) {
        const { number } = useSpring({
            from: { number: 0 },
            number: n,
            delay: 3000,
            config: { mass: 0.5, tension: 20, friction: 10 },
        });
        return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
    }

    return (
        <div className="md:container md:mx-auto px-5 py-10">
            <div className="flex justify-center flex-col items-center">
                <div className="flex items-center flex-col mb-5">
                    <p className="text-3xl font-semibold mb-5">
                        Business Data Facts
                    </p>
                </div>
                <ul className="flex lg:flex-row flex-col gap-5 justify-center mb-10">
                    <div className="flex gap-x-5">
                        <li className="bg-white shadow-sm rounded-xl p-5 sm:p-10 flex justify-center items-center flex-col text-center md:w-[320px] flex-[1]">
                            <p className="text-[28px] mb-1 font-bold">
                                <Number n={870} />
                            </p>
                            <p className="mb-2 text-[20px]">Deals closed</p>
                            <i
                                class="fa fa-handshake-o text-5xl text-[#fe7300]"
                                aria-hidden="true"
                            ></i>
                        </li>
                        <li className="bg-white shadow-sm rounded-xl p-5 sm:p-10 flex justify-center items-center flex-col text-center md:w-[320px] flex-[1]">
                            <p className="text-[28px] mb-1 font-bold flex">
                                <Number n={5} />+
                            </p>
                            <p className="mb-2 text-[20px]">Projects</p>
                            <i
                                class="fa fa-archive text-5xl text-[#fe7300]"
                                aria-hidden="true"
                            ></i>
                        </li>
                    </div>
                    <div className="flex gap-x-5">
                        <li className="bg-white shadow-sm rounded-xl p-5 sm:p-10 flex justify-center items-center flex-col text-center md:w-[320px] flex-[1]">
                            <p className="text-[28px] mb-1 font-bold flex ">
                                <Number n={1700} />k
                            </p>
                            <p className="mb-2 text-[20px]">Tons transported</p>
                            <i
                                class="fa fa-cogs text-5xl text-[#fe7300]"
                                aria-hidden="true"
                            ></i>
                        </li>
                        <li className="bg-white shadow-sm rounded-xl p-5 sm:p-10 flex justify-center items-center flex-col text-center md:w-[320px] flex-[1]">
                            <p className="text-[28px] mb-1 font-bold flex">
                                <Number n={200} />+
                            </p>
                            <p className="mb-2 text-[20px]">Employees</p>
                            <i
                                class="fa fa-users text-5xl text-[#fe7300]"
                                aria-hidden="true"
                            ></i>
                        </li>
                    </div>
                </ul>
                <div className="flex items-center flex-col ">
                    <Link
                        to="/about-us"
                        className="py-2 px-5 rounded-lg bg-orange-400/40 text-center text-[#FE7200]"
                    >
                        Why us?
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default BusinessFacts;
