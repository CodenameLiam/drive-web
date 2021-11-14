import { User } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { auth } from '../Firebase';

interface UseAuth {
    admin: boolean;
    user: User | null;
}

const useAuth = (): UseAuth => {
    const [user, setUser] = useState<User | null>(null);
    const [admin, setAdmin] = useState<boolean>(false);

    useEffect(() => {
        const authListener = auth.onAuthStateChanged(async (_user) => {
            const token = await _user?.getIdTokenResult();
            setAdmin(!!token?.claims.admin);
            setUser(_user);
        });
        return authListener;
    }, []);

    return { admin, user };
};

export default useAuth;
