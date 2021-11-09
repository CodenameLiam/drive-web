import React from 'react';
import * as Styles from './Home.styles';

const Home = () => {
    return (
        <Styles.Container>
            <Styles.Image src={process.env.PUBLIC_URL + '/Assets/Logo.jpg'} />
            <h1>Coming Soon...</h1>
        </Styles.Container>
    );
};

export default Home;
