import API from "../../api";

export const getUserData = async () => {
    try {
        const token = localStorage.getItem('accessToken');
        if (!token) {
            throw new Error('Token not found');
        }

        const response = await API.get('user/user/', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return response.data;
    } catch (error) {
        if (error.response && error.response.status === 401) {
            return { error: 'Unauthorized access' };
        } else {
            return { error: 'An error occurred while fetching user data' };
        }
    }
};