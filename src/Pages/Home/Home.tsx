import React from 'react';
import * as Styles from './Home.styles';
import Page from '../../Components/Page/Page';

const Home = () => {
    return (
        <Page title='Home'>
            <Styles.Container>
                <Styles.Image src={process.env.PUBLIC_URL + '/Assets/Logo.jpg'} />
                <h1>Coming Soon...</h1>
            </Styles.Container>
        </Page>
    );
};

export default Home;
