import { Cross } from 'hamburger-react';
import { useEffect } from 'react';
import { FC, useState } from 'react';
import { toast } from 'react-toastify';
import { useAdmin, useUser } from '../../Context/AppContext';
import { auth } from '../../Firebase';
import { GreyColours } from '../../Styles/Colours';
import * as Styles from './Navigation.styles';

const Navigation: FC = () => {
    const user = useUser();
    const admin = useAdmin();
    const [open, setOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : 'visible';
    }, [open]);

    const handleLogout = async () => {
        try {
            await auth.signOut();
            toast.success('Successfully signed out');
        } catch (error) {
            toast.error('Could not sign out');
        }
    };

    return (
        <Styles.Section id='menu'>
            <Styles.Button id='menu-button' open={open}>
                <Cross
                    aria-label='Open menu'
                    rounded
                    toggled={open}
                    toggle={setOpen}
                    color={GreyColours.GREY3}
                    size={26}
                />
            </Styles.Button>
            <Styles.Background id='menu-background' open={open} />

            <Styles.Container open={open}>
                <Styles.Content id='navigation' open={open}>
                    <Styles.List>
                        <Styles.NavItem delay='0.1s'>
                            <Styles.NavLink to='/'>Home</Styles.NavLink>
                        </Styles.NavItem>
                        <Styles.NavItem delay='0.2s'>
                            <Styles.NavLink to='/privacy-policy'>Privacy Policy</Styles.NavLink>
                        </Styles.NavItem>
                        {user ? (
                            <Styles.NavItem delay='0.3s'>
                                <Styles.NavLink onClick={handleLogout} to='#'>
                                    Sign Out
                                </Styles.NavLink>
                            </Styles.NavItem>
                        ) : (
                            <Styles.NavItem delay='0.3s'>
                                <Styles.NavLink to='/login'>Sign In</Styles.NavLink>
                            </Styles.NavItem>
                        )}
                        {admin && (
                            <Styles.NavItem delay='0.3s'>
                                <Styles.NavLink to='/admin/ads'>Advertisements</Styles.NavLink>
                            </Styles.NavItem>
                        )}
                    </Styles.List>
                </Styles.Content>
            </Styles.Container>
        </Styles.Section>
    );
};

export default Navigation;
