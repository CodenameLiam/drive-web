import styled from '@emotion/styled';
import { TableContainer as MUITableContainer, Button as MUIButton, darken } from '@mui/material';
import { Colours, GreyColours } from '../../../Styles/Colours';

export const Container = styled.div`
    padding: 2rem;
`;

export const TableContainer = styled(MUITableContainer)`
    border: 1px solid ${GreyColours.GREY1};
    border-radius: 1rem;
    box-shadow: none;

    .MuiTableHead-root {
        th {
            background: ${GreyColours.GREY0};
            font-family: 'Poppins', sans-serif;
        }
    }

    .MuiTableRow-root {
        td {
            font-family: 'Poppins', sans-serif;
        }

        &:last-child {
            & td {
                border-bottom: 0px;
            }
        }
    }
`;

export const ButtonGroup = styled.div`
    display: flex;
`;

export const Button = styled(MUIButton)`
    font-family: 'Poppins', sans-serif;
    padding: 0.5rem;
    margin-right: 0.5rem;
    margin-bottom: 1rem;
    color: ${Colours.white};
    background: ${Colours.primary};
    width: 10rem;

    &:hover {
        background: ${darken(Colours.primary, 0.1)};
    }
`;

export const ImageContainer = styled.div`
    display: flex;
`;

export const Image = styled.img`
    width: 22rem;
    height: 10rem;
    background-color: ${GreyColours.GREY0};
    object-fit: contain;
    border-radius: 1rem;
`;

export const ImagePlaceholder = styled.div`
    width: 22rem;
    height: 10rem;
    background-color: ${GreyColours.GREY0};
    border-radius: 1rem;
`;

export const DropContainer = styled.div`
    cursor: pointer;
    padding: 2rem;
    margin-left: 1rem;
    width: 18rem;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px dashed ${GreyColours.GREY1};
    transition: background-color 0.3s;

    &:hover {
        background-color: ${GreyColours.GREY0};
    }
`;
