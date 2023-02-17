import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Container from "../components/Container";
import Heading from "../components/Heading";

function AboutUs() {
    return (
        <div>
            <Container>
                <Heading
                    title={"About us"}
                    subTitle="Tal Hishig Mining LLC was established in 2017 with the
                investment of MU and China, and it has been operating for the
                second year."
                    img={"/serviceImages/digital-10 1.png"}
                />
            </Container>
            {/* <!-- main-section start --> */}
            <div className="container max-w-[1440px] px-5 md:px-20 mb-20 mx-auto flex">
                <aside className="w-1/4">
                    <ul className="bg-white p-4 rounded-lg flex flex-col gap-6 ">
                        <li>
                            <NavLink
                                to="/about-us"
                                className={({ isActive }) => {
                                    return isActive ? "actived" : "";
                                }}
                            >
                                About Company
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="timeline"
                                className={({ isActive }) => {
                                    return isActive ? "actived" : "";
                                }}
                            >
                                Time Line
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="gallery"
                                className={({ isActive }) => {
                                    return isActive ? "actived" : "";
                                }}
                            >
                                Gallery
                            </NavLink>
                        </li>
                    </ul>
                </aside>
                <div className="px-16 w-3/4">
                    <Outlet />
                </div>
            </div>
            {/* <!-- main-section end --> */}

            {/* <!-- timeline start --> */}

            {/* <!-- timeline end --> */}
        </div>
    );
}

export default AboutUs;
