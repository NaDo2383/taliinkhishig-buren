import { FloatButton } from "antd";
import React, { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Footer from "./Footer";
import GoToTop from "./goToTop";
import Header from "./Header";

function Layout() {
    const location = useLocation();
    const [ds, setDs] = useState(true);

    useEffect(() => {
        // 👇️ scroll to top on
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [location]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDs(false);
        }, 300);
        return () => clearTimeout(timer);
    }, []);

    if (ds) {
        return (
            <div className="absolute w-[100%] h-[100vh] p-0  justify-center items-center loading m-0 bg-white flex">
                <img src="/images/logo1.png" className="animate-spin" />
            </div>
        );
    }

    return (
        <div className="bg-gray-100 overflow-x-hidden">
            <Header
                title={"Your road to the future resources."}
                description="What we produce is essential for the world to continue to grow and
              many of our products will help make the transition to cleaner
              energy possible"
            />
            <Outlet />
            <Footer />
            {/* <FloatButton.BackTop /> */}
            <GoToTop />
        </div>
    );
}

export default Layout;
