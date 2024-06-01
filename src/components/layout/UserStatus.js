import React, { useEffect, useState } from 'react';
import useUser from "../hooks/useUser";
import Button from "../common/Button";

const UserStatus = () => {
    const { user, loading, error } = useUser();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        if (user) {
            setIsAuthenticated(true);
            console.log(user)
        } else {
            setIsAuthenticated(false);
        }
    }, [user]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {!isAuthenticated ? (
                <Button
                    isLink={true}
                    className="bg-secondary font-bold text-lg text-white py-3 px-10 rounded-lg"
                    to={'/login'}
                >
                    Войти
                </Button>
            ) : (
                <div className="flex items-center space-x-4">
                    <img
                        src={user.photo}
                        alt="User Photo"
                        className="w-10 h-10 rounded-full"
                    />
                    <div>
                        <p className="font-semibold text-lg text-gray-800">{user.username}</p>

                        <Button
                            isLink={true}
                            className="bg-secondary font-bold text-lg text-white py-1 px-3 rounded-lg mt-2"
                            to={'/profile'}
                        >
                            Profile
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserStatus;