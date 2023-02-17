import React from "react";
import { useState } from "react";

export default function TimeLine() {
    const [navBGColor, setNavBGColor] = useState(false);

    function changeNavBackgroundColor() {
        setNavBGColor(window.scrollY);
    }

    window.addEventListener("scroll", () => changeNavBackgroundColor());
    return (
        <div className="timeLine">
            <div className="container mx-auto w-full ">
                <div>
                    <p className="text-center text-4xl font-semibold">
                        Our History
                    </p>
                </div>
                <div className="relative wrap overflow-hidden md:p-10 p-5 h-full">
                    <div className="z-20 flex items-center order-1 relative w-14 h-14 left-[50%] translate-x-[-50%] top-3">
                        <img
                            className="ml-[5px]"
                            src="/images/logo1.png"
                            alt=""
                        />
                    </div>
                    <div
                        className="border-2-2 absolute border-[#FE7200] h-full border"
                        style={{ left: "49.9%" }}
                    ></div>
                    {/* <!-- right timeline --> */}
                    <div className="mb-8 flex justify-between items-center w-full right-timeline">
                        <div className="order-1 w-5/12"></div>
                        <div className="z-20 flex items-center order-1 relative bg-gray-800 shadow-xl w-5 h-5 rounded-full">
                            <h1 className="mx-auto font-semibold text-3xl text-gray-900 absolute left-[-100px] ">
                                2021
                            </h1>
                        </div>
                        <div className="order-1 rounded-lg w-5/12 py-4">
                            <p
                                className="font-medium text-xl leading-snug tracking-wide text-gray-900 text-opacity-100 duration-2000 ease-linear delay-150"
                                style={{
                                    opacity: navBGColor > 600 ? "1" : "0",
                                }}
                            >
                                Awarded with "Growth of year" by Bloomberg TV
                                Mongolia
                            </p>
                        </div>
                    </div>

                    {/* <!-- left timeline --> */}
                    <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                        <div className="order-1 w-5/12"></div>
                        <div className="z-20 flex items-center order-1 relative bg-gray-800 shadow-xl w-5 h-5 rounded-full">
                            <h1 className="mx-auto font-semibold text-3xl text-gray-900 absolute left-[100px] ">
                                2020
                            </h1>
                        </div>
                        <div className="order-1 rounded-lg w-5/12 py-4">
                            <p
                                className="font-medium leading-snug tracking-wide text-xl text-gray-900 text-opacity-100 duration-2000 ease-linear delay-150 text-right"
                                style={{
                                    opacity: navBGColor > 700 ? "1" : "0",
                                }}
                            >
                                Prospecting works of iron ore deposits in
                                Selenge province. Signed an transportation
                                agreement with "Erdenes Tavan Tolgoi" JSC
                                Purchased 120 rail wagon from Russia expanding
                                our park to 800 wagons. Holder of mining license
                                of Selenge iron ore deposit.
                            </p>
                        </div>
                    </div>

                    {/* <!-- right timeline --> */}
                    <div className="mb-8 flex justify-between items-center w-full right-timeline">
                        <div className="order-1 w-5/12"></div>
                        <div className="z-20 flex items-center order-1 relative bg-gray-800 shadow-xl w-5 h-5 rounded-full">
                            <h1 className="mx-auto font-semibold text-3xl text-gray-900 absolute left-[-100px] ">
                                2019
                            </h1>
                        </div>
                        <div className="order-1 rounded-lg w-5/12 py-4">
                            <p
                                className="font-medium leading-snug tracking-wide text-xl text-gray-900 text-opacity-100 transition-all duration-2000 ease-linear delay-150"
                                style={{
                                    opacity: navBGColor > 800 ? "1" : "0",
                                }}
                            >
                                Prospecting work of gold copper deposits in
                                Bayankhongor province. Prospecting for fluorite
                                deposit in Dornod province. Purchased 275 rail
                                wagon from Republic of Estonia. "Jin Yun Mining"
                                JSC was established.
                            </p>
                        </div>
                    </div>

                    {/* <!-- left timeline --> */}
                    <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                        <div className="order-1 w-5/12"></div>
                        <div className="z-20 flex items-center order-1 relative bg-gray-800 shadow-xl w-5 h-5 rounded-full">
                            <h1 className="mx-auto font-semibold text-3xl text-gray-900 absolute left-[100px] ">
                                2018
                            </h1>
                        </div>
                        <div className="order-1 rounded-lg w-5/12 py-4">
                            <p
                                className="font-medium leading-snug tracking-wide text-xl text-gray-900 text-opacity-100 transition-all duration-500 ease-linear delay-150 text-right"
                                style={{
                                    opacity: navBGColor > 1000 ? "1" : "0",
                                }}
                            >
                                Increased number of rail wagons by 250 wagons.
                            </p>
                        </div>
                    </div>
                    {/* <!-- right timeline --> */}
                    <div className="mb-8 flex justify-between items-center w-full right-timeline">
                        <div className="order-1 w-5/12"></div>
                        <div className="z-20 flex items-center order-1 relative bg-gray-800 shadow-xl w-5 h-5 rounded-full">
                            <h1 className="mx-auto font-semibold text-3xl text-gray-900 absolute left-[-100px] ">
                                2017
                            </h1>
                        </div>
                        <div className="order-1 rounded-lg w-5/12 py-4">
                            <p
                                className="font-medium leading-snug tracking-wide text-xl text-gray-900 text-opacity-100 transition-all duration-500 ease-linear delay-150"
                                style={{
                                    opacity: navBGColor > 1200 ? "1" : "0",
                                }}
                            >
                                Started our first transportation services of
                                coal and iron ore.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="z-20 flex items-center order-1 relative w-14 h-14 left-[50%] translate-x-[-50%] top-[-20px]">
                    <img
                        className="ml-[5px]"
                        src="/images/grayLogo.png"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
}
