import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppContainer } from './Styles/Containers';
import { Global } from '@emotion/react';
import GlobalStyles from './Styles/Global';
import Router from './Router/Router';

function App() {
    return (
        <BrowserRouter>
            <AppContainer>
                <Global styles={GlobalStyles} />
                <Router />
            </AppContainer>
        </BrowserRouter>
    );
}

export default App;
