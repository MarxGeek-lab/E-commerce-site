import React, { Suspense, lazy } from "react";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LayoutHome from "./layouts/Layout";

import { CONTACT_PAGE, HOME_PAGE, PRODUCT_PAGE, PROMOTION_PAGE } from "./settings/constant";

const HomePage = lazy(() => import('./pages/Home/Home'));
const ProductPage = lazy(() => import('./pages/Product/Product'));
const OffersPage = lazy(() => import('./pages/Offers/Offers')); 
const ContactPage = lazy(() => import('./pages/Contact/Contact'));

const AppRouter: React.FC = () => (
    <Router>
        <Routes>
            <Route path={HOME_PAGE} element={
                <Suspense fallback={"..."}>
                    <LayoutHome>
                        <HomePage />
                    </LayoutHome>
                </Suspense>
            }/>

            <Route path={PRODUCT_PAGE} element={
                <Suspense fallback={"..."}>
                    <LayoutHome>
                        <ProductPage />
                    </LayoutHome>
                </Suspense>
            }/>
            <Route path={PROMOTION_PAGE} element={
                <Suspense fallback={"..."}>
                    <LayoutHome>
                        <OffersPage />
                    </LayoutHome>
                </Suspense>
            }/>
            <Route path={CONTACT_PAGE} element={
                <Suspense fallback={"..."}>
                    <LayoutHome>
                        <ContactPage />
                    </LayoutHome>
                </Suspense>
            }/>
        </Routes>
    </Router>
);

export default AppRouter;


