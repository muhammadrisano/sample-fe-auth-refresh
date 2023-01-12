import axios from 'axios'

const api = axios.create({
    baseURL: process.env.REACT_APP_API_BACKEND
})

const resfrestToken = async()=>{
    const resfrestToken = localStorage.getItem('resfreshToken')
    try {
        const result = await axios.post(`${process.env.REACT_APP_API_BACKEND}/users/refresh-token`, {
            resfreshToken: resfrestToken
        })
        return result.data.data

    } catch (error) {
        return Promise.reject(error)
    }
}

api.interceptors.request.use(function (config) {
    // Do something before request is sent
    const token = localStorage.getItem('token')
    config.headers={
        authorization: `Bearer ${token}`
    }
    return config;
  }, function (error) {

    return Promise.reject(error);
  });


api.interceptors.response.use(function (response) {
    return response;
  }, async function (error) {

    const originalRequest = error.config
    if(error.response.status === 401 && error.response.data.message === 'token expired' && !originalRequest._retry){
       originalRequest._retry = true
       const newToken = await resfrestToken() 
       localStorage.setItem('token', newToken.token)
       localStorage.setItem('resfreshToken',newToken.refreshToken)
       console.log(newToken.token);
       originalRequest.headers = {
        ...originalRequest.headers,
        authorization: `Bearer ${newToken.token}`
       }
    //    api.defaults.headers.common['Authorization'] = `Bearer ${newToken.token}`
       return api(originalRequest)
    }
    console.log('axios test', error.response);
    return Promise.reject(error);
  });

export default api