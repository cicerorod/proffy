import axios from 'axios';

const api = axios.create({
	//baseURL: 'http://localhost:3333',
	baseURL: 'https://proffys-deploy-server.herokuapp.com/',
});

export default api;
