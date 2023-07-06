import React, {  useEffect } from 'react';
import axiosInstance from '../Axios';
import { useNavigate } from "react-router-dom";

export default function SignUp() {
	const navigate = useNavigate();

	useEffect(() => {
        // eslint-disable-next-line 
		const response = axiosInstance.post('user/logout/blacklist/', {
			refresh_token: localStorage.getItem('refresh_token'),
		});
		localStorage.removeItem('access_token');
		localStorage.removeItem('refresh_token');
		axiosInstance.defaults.headers['Authorization'] = null;
		navigate('/signin');
	});
	return <div>Logout</div>;
}