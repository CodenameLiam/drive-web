import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppContainer } from './Styles/Containers';
import { Global } from '@emotion/react';
import GlobalStyles from './Styles/Global';
import Router from './Router/Router';
import { StyledEngineProvider } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppContextProvider from './Context/AppContext';

function App() {
    return (
        <BrowserRouter>
            <StyledEngineProvider injectFirst>
                <AppContextProvider>
                    <AppContainer>
                        <Global styles={GlobalStyles} />
                        <Router />
                        <ToastContainer />
                    </AppContainer>
                </AppContextProvider>
            </StyledEngineProvider>
        </BrowserRouter>
    );
}

export default App;
