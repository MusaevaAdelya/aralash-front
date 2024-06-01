import React, { useEffect, useState } from 'react';
import useUser from "../hooks/useUser";
import Button from "../common/Button";

const UserStatus = () => {
    const { user, loading, error } = useUser();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        if (user) {
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
        }
    }, [user]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error || !isAuthenticated) {
        return (
            <Button
                isLink={true}
                className="bg-secondary font-bold text-lg text-white py-3 px-10 rounded-lg"
            >
                Войти
            </Button>
        );
    }

    return (
        <div className="flex items-center space-x-4">
            <img
                src={user.photo}
                alt="User Photo"
                className="w-10 h-10 rounded-full"
            />
            <div>
                <p>{user.username}</p>
                <Button
                    isLink={true}
                    className="bg-secondary font-bold text-lg text-white py-1 px-3 rounded-lg mt-2"
                >
                    Profile
                </Button>
            </div>
        </div>
    );
};

export default UserStatus;
