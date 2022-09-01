import axios from 'axios'
export const axiosInstance = axios.create({
     baseURL: "https://classmanagementserver.herokuapp.com/api/"
})