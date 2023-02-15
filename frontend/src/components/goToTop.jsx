import React, { useEffect, useState } from "react";

export default function GoToTop() {
    const [showTopBtn, setShowTopBtn] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 500) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);

    function topFunction() {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }
    return (
        <div
            onClick={() => topFunction()}
            id="goTopButtonContainer"
            style={{ display: showTopBtn ? "block" : "none" }}
        >
            <i class="fa fa-angle-up text-[40px]" aria-hidden="true"></i>
        </div>
    );
}
