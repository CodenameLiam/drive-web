import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Ads from '../Pages/Admin/Ads/Ads';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import PrivacyPolicy from '../Pages/PrivacyPolicy/PrivacyPolicy';

const Router: FC = () => {
    return (
        <Routes>
            <Route path='*' element={<Home />} />
            <Route path='privacy-policy' element={<PrivacyPolicy />} />
            <Route path='login' element={<Login />} />
            <Route path='admin/ads' element={<Ads />} />
        </Routes>
    );
};

export default Router;
