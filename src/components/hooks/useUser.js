import { useState, useEffect } from 'react';
import { getUserData } from '../../services/user/userData';

const useUser = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchUserData = async () => {
        setLoading(true);
        const result = await getUserData();

        if (result.error) {
            setError(result.error);
            setUser(null);
        } else {
            setUser(result);
            setError(null);
        }

        setLoading(false);
    };

    useEffect(() => {
        fetchUserData();
    }, []);

    const logout = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        setUser(null);
    };

    return { user, loading, error, fetchUserData, logout };
};

export default useUser;
