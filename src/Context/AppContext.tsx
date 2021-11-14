import { User } from '@firebase/auth';
import { createContext, FC, useContext } from 'react';
import useAuth from '../Hooks/useAuth';

interface AppContextState {
    admin: boolean;
    user: User | null;
}

const DEFAULT: AppContextState = {
    admin: false,
    user: null,
};

const AppContext = createContext<AppContextState>(DEFAULT);

const AppContextProvider: FC = ({ children }) => {
    const { admin, user } = useAuth();

    return <AppContext.Provider value={{ admin, user }}>{children}</AppContext.Provider>;
};

export default AppContextProvider;

export const useUser = (): User | null => {
    return useContext(AppContext).user;
};

export const useAdmin = (): boolean => {
    return useContext(AppContext).admin;
};
