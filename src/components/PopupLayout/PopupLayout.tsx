import React, { ReactNode, useState } from "react";

import "./PopupLayout.scss";

interface PopupLayoutProps {
    children: ReactNode;
    openPopup?: boolean;
    isOpenPopup: (bool: boolean) => void;
}

const PopupLayoutComponent:React.FC<PopupLayoutProps> = ({ children, openPopup, isOpenPopup }) => {

    const closePopup = (e:React.MouseEvent) => {
        const overlay = document.querySelector(".PopupLayout");
        if(e.target !== overlay) return;
        isOpenPopup(!openPopup);
    }
    return (
        <div className="PopupLayout Dflex Dflex-alignCenter Dflex-justifyCCenter"
        style={openPopup ? {display: "flex"}:{display: "none"}} onClick={closePopup}>
            {children}
        </div>
    );
};

export default PopupLayoutComponent;