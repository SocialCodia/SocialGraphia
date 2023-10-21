import axios from "axios";
import store from '../store/index';


const api = axios.create({
    baseURL:'https://digitalpost365.com/admin/api/userapi/v7/',

});

api.interceptors.request.use((config)=>{
    config.data.token=store.getState().authSlice.token;
    console.log(config);
    return config;
},(error)=>{

})

export const doLogin = data => api.post('/login',data);
export const getHomePage = data => api.post('/gethomepage',data);
export const getAllVideoPosts = data => api.post('/getAllVideoPosts',data);
export  const getFestivalImages = data => api.post('/getfestivalimages',data);
export const getLanguageVideo = data => api.post('/getLanguageVideo',data);

export default api;