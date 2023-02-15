import React from "react";
import { useSpring, animated } from "react-spring";

function BusinessFacts() {
    function Number({ n }) {
        const { number } = useSpring({
            from: { number: 0 },
            number: n,
            delay: 1000,
            config: { mass: 1, tension: 20, friction: 10 },
        });
        return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
    }
    function Number1({ n }) {
        const { number } = useSpring({
            from: { number: 0 },
            number: n,
            delay: 1000,
            config: { mass: 0.1, tension: 20, friction: 10 },
        });
        return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
    }

    return (
        <div className="md:container md:mx-auto px-5 py-10">
            <div className="flex justify-center flex-col items-center">
                <div className="flex items-center flex-col mb-10">
                    <p className="text-xl font-semibold mb-5">
                        Business Data Facts
                    </p>
                    <p className="py-2 px-5 rounded-lg bg-orange-400/40 text-center text-[#FE7200]">
                        Why us?
                    </p>
                </div>
                <ul className="flex lg:flex-row flex-col gap-5 justify-center ">
                    <div className="flex gap-x-5">
                        <li className="bg-white shadow-sm rounded-xl p-5 sm:p-10 flex justify-center items-center flex-col text-center md:w-[220px] flex-[1]">
                            <p className="text-2xl mb-1 font-bold">
                                <Number n={870} />
                            </p>
                            <p className="mb-2">Deals closed</p>
                            <img
                                src="/businessFactsIcons/deals.png"
                                className="w-15 h-11"
                            />
                        </li>
                        <li className="bg-white shadow-sm rounded-xl p-5 sm:p-10 flex justify-center items-center flex-col text-center md:w-[220px] flex-[1]">
                            <p className="text-2xl mb-1 font-bold flex">
                                <Number n={5} />+
                            </p>
                            <p className="mb-2">Projects</p>
                            <img
                                src="/businessFactsIcons/project.png"
                                className="w-15 h-11"
                            />
                        </li>
                    </div>
                    <div className="flex gap-x-5">
                        <li className="bg-white shadow-sm rounded-xl p-5 sm:p-10 flex justify-center items-center flex-col text-center md:w-[220px] flex-[1]">
                            <p className="text-2xl mb-1 font-bold flex">
                                <Number1 n={1700} />k
                            </p>
                            <p className="mb-2">Tons transported</p>
                            <img
                                src="/businessFactsIcons/settings.png"
                                className="w-15 h-11"
                            />
                        </li>
                        <li className="bg-white shadow-sm rounded-xl p-5 sm:p-10 flex justify-center items-center flex-col text-center md:w-[200px] flex-[1]">
                            <p className="text-2xl mb-1 font-bold flex">
                                <Number n={200} />+
                            </p>
                            <p className="mb-2">Employees</p>
                            <img
                                src="/businessFactsIcons/employee.png"
                                className="w-15 h-11"
                            />
                        </li>
                    </div>
                </ul>
            </div>
        </div>
    );
}

export default BusinessFacts;
