import React, { ReactNode } from "react";

import "./PopupLayout.scss";

interface PopupLayoutProps {
    children: ReactNode;
}

const PopupLayoutComponent:React.FC<PopupLayoutProps> = ({ children }) => {
    return (
        <div className="PopupLayout Dflex Dflex-alignCenter Dflex-justifyCCenter">
            {children}
        </div>
    );
};

export default PopupLayoutComponent;