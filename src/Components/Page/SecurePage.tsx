import React, { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { useAdmin } from '../../Context/AppContext';
import Page from './Page';

interface PageProps {
    title: string;
}

const SecurePage: FC<PageProps> = ({ children, title }) => {
    const admin = useAdmin();

    if (!admin) {
        return <Navigate to='/' />;
    }

    return <Page title={title}>{children}</Page>;
};

export default SecurePage;
