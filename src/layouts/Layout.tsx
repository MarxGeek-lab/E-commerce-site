import React, { ReactNode } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

interface LayoutHomeProps {
    children: ReactNode;
}

const LayoutHome: React.FC<LayoutHomeProps> = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};

export default LayoutHome;