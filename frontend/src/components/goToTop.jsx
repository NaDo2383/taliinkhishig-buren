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
            <div id="goTopButton">
                <svg
                    viewBox="64 64 896 896"
                    focusable="false"
                    data-icon="vertical-align-top"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    aria-hidden="true"
                >
                    <path d="M859.9 168H164.1c-4.5 0-8.1 3.6-8.1 8v60c0 4.4 3.6 8 8.1 8h695.8c4.5 0 8.1-3.6 8.1-8v-60c0-4.4-3.6-8-8.1-8zM518.3 355a8 8 0 00-12.6 0l-112 141.7a7.98 7.98 0 006.3 12.9h73.9V848c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V509.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 355z"></path>
                </svg>
            </div>
        </div>
    );
}
