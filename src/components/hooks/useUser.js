import { useState, useEffect } from 'react';
import { getUserData } from '../../services/user/userData'; // Убедитесь, что путь к файлу api.js указан правильно

const useUser = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
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

        fetchUserData();
    }, []);

    const logout = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        setUser(null);
    };

    return { user, loading, error, logout };
};

export default useUser;
