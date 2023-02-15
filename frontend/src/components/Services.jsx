import React from "react";
import * as FiIcons from "react-icons/fi";
import { Link } from "react-router-dom";
import Container from "./Container";

function Services() {
    return (
        <Container>
            <div className="relative scale-up-top  ">
                <ul className="mb-10 sm:mb-20 sm:mt-40 md:mt-[-80px] grid mt-60 sm:grid-cols-2 xl:grid-cols-4 rounded-xl shadow-lg bg-white divide-y md:divide-y-0 md:divide-x  ">
                    <li className="flex flex-col justify-between gap-3 mx-10 md:mx-0 py-10 md:py-0 md:px-10 md:my-10 myTrainDiv">
                        <div className="flex flex-col gap-3">
                            <img
                                src="/serviceIcons/Train.png"
                                className="w-12 h-12 rounded-full overflow-hidden p-2 border-2 border-[#FE7200] myTrainIcon"
                                alt=""
                            />
                            <p className="font-semibold text-lg">
                                Rail Logistics
                            </p>
                            <p className="text-[15px]">
                                It is one of the most important, commonly used,
                                and cost-effective modes of commute and goods
                                carriage over long as well as short distances.
                            </p>
                        </div>

                        <Link
                            to="/service/rail-logistic"
                            className="hover:pl-3  transition-all duration-200"
                        >
                            <a>
                                <i
                                    class="fa fa-arrow-right text-[#FE7200] text-xl"
                                    aria-hidden="true"
                                ></i>
                            </a>
                        </Link>
                    </li>

                    <li className="flex flex-col justify-between gap-3 mx-10 md:mx-0 py-10 md:py-0 md:px-10 md:my-10 trainDiv">
                        <div className="flex flex-col gap-3">
                            <img
                                src="./serviceIcons/MineTruck.png"
                                className="w-12 h-12 rounded-full overflow-hidden p-2 border-2 border-[#FE7200] trainIcon"
                                alt=""
                            />
                            <p className="font-semibold text-lg">Mining</p>
                            <p className="text-[15px]">
                                Process of extracting useful materials from the
                                earth. Some examples of substances that are
                                mined include coal, fluorine or iron ore.
                            </p>
                        </div>
                        <Link
                            to="/service/mining"
                            className="arrowContainer hover:pl-3 transition-all duration-200"
                        >
                            <a>
                                <FiIcons.FiArrowRight className="text-[#FE7200] text-xl arrow" />
                            </a>
                        </Link>
                    </li>
                    <li className="flex flex-col justify-between gap-3 mx-10 md:mx-0 py-10 md:py-0 md:px-10 md:my-10 trainDiv trainDiv">
                        <div className="flex flex-col gap-3">
                            <img
                                src="/serviceIcons/Shipped.png"
                                className="w-12 h-12 rounded-full overflow-hidden object-cover p-2 border-2 border-[#FE7200] trainIcon"
                                alt=""
                            />
                            <p className="font-semibold text-lg">
                                Freight Transportation
                            </p>
                            <p className="text-[15px]">
                                Stages and means rolled out when transporting
                                goods. Stages include deployed logistics,
                                conveyance or the resources used to reach the
                                delivery destination.
                            </p>
                        </div>
                        <Link
                            to="/service/freight-transportation"
                            className="arrowContainer hover:pl-3 transition-all duration-200"
                        >
                            <a>
                                <FiIcons.FiArrowRight className="text-[#FE7200] text-xl " />
                            </a>
                        </Link>
                    </li>
                    <li className="flex flex-col justify-between gap-3 mx-10 md:mx-0 py-10 md:py-0 md:px-10 md:my-10 mySpin">
                        <img
                            src="/serviceIcons/World.png"
                            className="w-12 h-12 rounded-full overflow-hidden object-cover p-2 border-2 border-[#FE7200] spinIcon"
                            alt=""
                        />
                        <p className="font-semibold text-lg">Foreign Trade</p>
                        <p className="text-[15px]">
                            We work with international partners in Russia and
                            China. Main activities are rail wagon rentals,sales,
                            logistic services.
                        </p>

                        <Link
                            to="/service/foreign-trade"
                            className="arrowContainer align-bottom hover:pl-3 transition-all duration-200 "
                        >
                            <a>
                                <FiIcons.FiArrowRight className="text-[#FE7200] text-xl " />
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
        </Container>
    );
}

export default Services;
