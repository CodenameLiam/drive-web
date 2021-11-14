import React, { FC, useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { IconButton } from '@mui/material';
import Page from '../../Components/Page/Page';
import * as Styles from './Login.styles';
import { Brands, Colours, GreyColours } from '../../Styles/Colours';
import { toast } from 'react-toastify';
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth } from '../../Firebase';
import { useNavigate } from 'react-router-dom';

const provider = new GoogleAuthProvider();

const Login: FC = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = async (type: 'email' | 'google') => {
        try {
            switch (type) {
                case 'email':
                    await signInWithEmailAndPassword(auth, email, password);
                    break;
                case 'google':
                    await signInWithPopup(auth, provider);
                    break;
            }
            navigate('/');
        } catch (error) {
            toast.error((error as Error).message);
        }
    };

    return (
        <Page title='Sign In'>
            <Styles.Container>
                <Styles.SignInContainer>
                    <Styles.Title>Sign In</Styles.Title>
                    <Styles.InputContainer>
                        <Styles.Input
                            onChange={(e) => setEmail(e.target.value)}
                            fullWidth
                            label='Email'
                            variant='outlined'
                            type='email'
                        />
                    </Styles.InputContainer>
                    <Styles.InputContainer>
                        <Styles.Input
                            onChange={(e) => setPassword(e.target.value)}
                            fullWidth
                            label='Password'
                            variant='outlined'
                            type={showPassword ? 'text' : 'password'}
                            InputProps={{
                                endAdornment: (
                                    <IconButton
                                        onClick={() =>
                                            setShowPassword((_showPassword) => !_showPassword)
                                        }>
                                        {showPassword ? <FiEyeOff /> : <FiEye />}
                                    </IconButton>
                                ),
                            }}
                        />
                    </Styles.InputContainer>
                    <Styles.Button
                        fullWidth
                        background={Colours.primary}
                        colour={Colours.white}
                        onClick={() => handleLogin('email')}>
                        Sign in
                    </Styles.Button>
                    <Styles.OrContainer>or</Styles.OrContainer>
                    <Styles.Button
                        fullWidth
                        background={Brands.apple}
                        colour={Colours.white}
                        startIcon={
                            <Styles.ButtonIcon src={process.env.PUBLIC_URL + '/Assets/Apple.svg'} />
                        }>
                        Sign in with Apple
                    </Styles.Button>
                    <Styles.Button
                        fullWidth
                        background={GreyColours.GREY0}
                        colour={GreyColours.GREY4}
                        onClick={() => handleLogin('google')}
                        startIcon={
                            <Styles.ButtonIcon
                                src={process.env.PUBLIC_URL + '/Assets/Google.svg'}
                            />
                        }>
                        Sign in with Google
                    </Styles.Button>
                    <Styles.Button
                        fullWidth
                        background={Brands.facebook}
                        colour={Colours.white}
                        startIcon={
                            <Styles.ButtonIcon
                                src={process.env.PUBLIC_URL + '/Assets/Facebook.svg'}
                            />
                        }>
                        Sign in with Facebook
                    </Styles.Button>
                </Styles.SignInContainer>
            </Styles.Container>
        </Page>
    );
};

export default Login;
