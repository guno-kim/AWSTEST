import axios from 'axios';


const axiosClient = axios.create({
    baseURL: 'http://localhost:5000',
    //baseURL: 'http://ec2-3-35-209-162.ap-northeast-2.compute.amazonaws.com',
    withCredentials:true
})

export default axiosClient;
