import styled from '@emotion/styled';
import { TextField, Button as MUIButton, darken } from '@mui/material';
import { GreyColours } from '../../Styles/Colours';

export const Container = styled.div`
    flex: 1;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const InputContainer = styled.div`
    padding: 0.5rem;
    width: 100%;
`;

export const SignInContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 30rem;
`;

export const Title = styled.h1`
    font-size: clamp(2rem, 10vw, 4rem);
    margin-bottom: 4rem;
`;

export const OrContainer = styled.p`
    margin: 2rem 0rem;
`;

export const Input = styled(TextField)`
    .MuiInputLabel-root {
        font-family: 'Poppins', sans-serif;
        color: ${GreyColours.GREY3};
    }

    .MuiOutlinedInput-notchedOutline {
        border: 1px solid ${GreyColours.GREY0};
    }

    .MuiOutlinedInput-root {
        &:hover {
            .MuiOutlinedInput-notchedOutline {
                border: 1px solid ${GreyColours.GREY1};
            }
        }
    }

    .Mui-focused {
        .MuiOutlinedInput-notchedOutline {
            border: 2px solid ${GreyColours.GREY1} !important;
        }
    }
`;

interface ButtonProps {
    colour: string;
    background: string;
}

export const Button = styled(MUIButton)<ButtonProps>`
    font-family: 'Poppins', sans-serif;
    padding: 0.75rem;
    margin: 0.5rem;
    color: ${({ colour }) => colour};
    background: ${({ background }) => background};

    &:hover {
        background: ${({ background }) => darken(background, 0.01)};
    }
`;

export const ButtonIcon = styled.img`
    position: absolute;
    left: 1rem;
    top: 1rem;
    width: 1rem;
    height: 1rem;
    object-fit: contain;
`;
