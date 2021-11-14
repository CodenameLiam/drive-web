import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { fadeUp } from '../../Styles/Animations';
import { Colours } from '../../Styles/Colours';
// import { fadeUp } from 'Styles/Animations';
// import { Theme } from 'Styles/Colours';

export const Section = styled.section`
    position: absolute;
    z-index: 999;
`;

interface NavigationProps {
    open: boolean;
}

export const Button = styled.div<NavigationProps>`
    position: fixed;
    top: 2rem;
    right: 2rem;
    z-index: 100;

    @media only screen and (max-width: 600px) {
        top: 1rem;
        right: 1rem;
    }

    .hamburger-react {
        z-index: 999;
        transition: transform 0.2s;

        &:hover {
            ${(props) =>
                !props.open &&
                css`
                    transform: scaleX(1.2);
                `}
        }
    }
`;

export const Background = styled.div<NavigationProps>`
    z-index: 50;
    position: fixed;
    border-radius: 250vmax;
    background-color: ${Colours.grey};
    width: ${(props) => (props.open ? '300vmax' : '0vmax')};
    height: ${(props) => (props.open ? '300vmax' : '0vmax')};
    top: ${(props) => (props.open ? 'calc(-150vmax + 3.5rem)' : '3.5rem')};
    right: ${(props) => (props.open ? 'calc(-150vmax + 3.5rem)' : '3.5rem')};
    transition: all ${(props) => (props.open ? '0.8s ease-out' : '0.3s ease-out')};

    @media only screen and (max-width: 600px) {
        top: ${(props) => (props.open ? 'calc(-150vmax + 2.5rem)' : '2.5rem')};
        right: ${(props) => (props.open ? 'calc(-150vmax + 2.5rem)' : '2.5rem')};
    }
`;

export const Container = styled.div<NavigationProps>`
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
    position: fixed;
    display: ${(props) => (props.open ? 'block' : 'none')};
`;

export const Content = styled.nav<NavigationProps>`
    padding: 2rem;
    margin: auto;
    margin-top: 12vh;
    text-align: center;
`;

export const List = styled.ul`
    padding: 1rem 0rem;
`;

interface NavItemProps {
    delay: string;
}

export const NavItem = styled.li<NavItemProps>`
    opacity: 0;
    list-style-type: none;
    padding: 1rem;
    animation: ${fadeUp} 1s forwards ${(props) => props.delay};
`;

export const NavLink = styled(Link)`
    position: relative;
    padding: 1rem;
    font-size: clamp(1rem, 10vw, 4rem);
    color: ${Colours.black};
    transition: color 0.25s ease-in-out;
    text-decoration: none;
    font-weight: 500;

    &::after {
        content: '';
        background-color: ${Colours.primary};
        width: 100%;
        height: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        transform: scaleX(0);
        transform-origin: 0 100%;
        transition: transform 0.25s ease-in-out;
        z-index: -1;
    }

    &:hover {
        color: ${Colours.white};
        &::after {
            transform: scaleX(1);
        }
    }
`;

export const NavSignIn = styled.span``;
