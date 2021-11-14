import React, { FC, Fragment, useEffect } from 'react';
import Navigation from '../Navigation/Navigation';
import * as Styles from './Page.styles';

interface PageProps {
    title: string;
}

const Page: FC<PageProps> = ({ title, children }) => {
    useEffect(() => {
        document.title = `DRIV | ${title}`;
    }, [title]);

    return (
        <Fragment>
            <Navigation />
            <Styles.Main>{children}</Styles.Main>
        </Fragment>
    );
};

export default Page;
