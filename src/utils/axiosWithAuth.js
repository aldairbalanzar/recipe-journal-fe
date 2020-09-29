
import axios from 'axios';

const axiosWithAuth = () => {
  const token = JSON.parse(localStorage.getItem('token'))
  console.log('got token: ', token)

  return axios.create({
    baseURL: 'https://recipe-journal-be.herokuapp.com/',
    headers: {
        authorization: token,
      },
  });
};

export default axiosWithAuth;