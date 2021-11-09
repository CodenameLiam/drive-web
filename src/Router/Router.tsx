import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import PrivacyPolicy from '../Pages/PrivacyPolicy/PrivacyPolicy';

const Router: FC = () => {
    return (
        <Routes>
            <Route path='*' element={<Home />} />
            <Route path='privacy-policy' element={<PrivacyPolicy />} />
        </Routes>
    );
};

export default Router;
