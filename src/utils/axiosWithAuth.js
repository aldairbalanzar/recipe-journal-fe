import axios from 'axios';

const axiosWithAuth = () => {
  const token = JSON.parse(localStorage.getItem('token'))

  return axios.create({
    baseURL: process.env.REACT_APP_BASE_URL || 'http://localhost:5000/',
    headers: {
        'Content-Type': 'application/json',
        authorization: token,
      },
  });
};

export default axiosWithAuth;