import React, { useState } from 'react';
import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8000/apiV1/'; // Замените на ваш базовый URL

const ApiKeyManager = () => {
    const [companyName, setCompanyName] = useState('');
    const [apiKey, setApiKey] = useState('');
    const [newApiKey, setNewApiKey] = useState('');
    const [message, setMessage] = useState('');

    const handleGenerateKey = async () => {
        try {
            const response = await axios.post(`${API_BASE_URL}generate-key`, { company_name: companyName }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                },
            });
            setApiKey(response.data.api_key);
            setMessage('API key generated successfully.');
        } catch (error) {
            setMessage(error.response?.data?.error || 'Error generating API key.');
        }
    };

    const handleCheckKey = async () => {
        try {
            const response = await axios.post(`${API_BASE_URL}check-key`, { key: apiKey }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                },
            });
            setMessage(response.data.valid ? 'API key is valid.' : 'API key is invalid.');
        } catch (error) {
            setMessage(error.response?.data?.error || 'Error checking API key.');
        }
    };

    const handleRegenerateKey = async () => {
        try {
            const response = await axios.post(`${API_BASE_URL}regenerate-key`, { key: apiKey }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                },
            });
            setNewApiKey(response.data.new_api_key);
            setMessage('API key regenerated successfully.');
        } catch (error) {
            setMessage(error.response?.data?.error || 'Error regenerating API key.');
        }
    };

    const handleDeactivateKey = async () => {
        try {
            const response = await axios.post(`${API_BASE_URL}deactivate-key`, { key: apiKey }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                },
            });
            setMessage('API key deactivated successfully.');
        } catch (error) {
            setMessage(error.response?.data?.error || 'Error deactivating API key.');
        }
    };

    return (
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">API Key Manager</h2>

            {message && <div className="mb-4 text-red-600">{message}</div>}

            <div className="mb-6">
                <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
                    Company Name
                </label>
                <input
                    type="text"
                    id="companyName"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                <button
                    onClick={handleGenerateKey}
                    className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Generate Key
                </button>
            </div>

            <div className="mb-6">
                <label htmlFor="apiKey" className="block text-sm font-medium text-gray-700">
                    API Key
                </label>
                <input
                    type="text"
                    id="apiKey"
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                <div className="flex space-x-4 mt-2">
                    <button
                        onClick={handleCheckKey}
                        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                        Check Key
                    </button>
                    <button
                        onClick={handleRegenerateKey}
                        className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    >
                        Regenerate Key
                    </button>
                    <button
                        onClick={handleDeactivateKey}
                        className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                    >
                        Deactivate Key
                    </button>
                </div>
                {newApiKey && (
                    <p className="mt-2 text-sm text-gray-700">
                        New API Key: <span className="font-mono">{newApiKey}</span>
                    </p>
                )}
            </div>
        </div>
    );
};

export default ApiKeyManager;
