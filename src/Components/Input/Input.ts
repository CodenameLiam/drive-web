import styled from '@emotion/styled';
import { TextField } from '@mui/material';
import { GreyColours } from '../../Styles/Colours';

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
