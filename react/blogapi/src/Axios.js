import axios from 'axios';

const baseURL = 'https://8000-alimgee-drf-react-ia5k4e36dw.us2.codeanyapp.com/api/';

const axiosInstance = axios.create({
	baseURL: baseURL,
	timeout: 5000,
	headers: {
		Authorization: localStorage.getItem('access_token')
			? 'JWT ' + localStorage.getItem('access_token')
			: null,
		'Content-Type': 'application/json',
		accept: 'application/json',
	}, 
});



export default axiosInstance;