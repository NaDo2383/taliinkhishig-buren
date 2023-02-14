import React from "react";

function Container({ children, bgColor }) {
    return (
        <div style={{ backgroundColor: bgColor }}>
            <div className="md:container mx-auto sm:px-10 px-4 lg:px-20">
                <div className="max-w-[1440px] mx-auto">{children}</div>
            </div>
        </div>
    );
}

export default Container;
