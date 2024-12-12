import axios from 'axios'

export const axiosRegular = axios.create({
    baseURL: 'https://b9a12-server-side-e3zrv7mot-lalonasms-projects.vercel.app/',
})
const useAxiosRegular = () => {
    return axiosRegular;
}

export default useAxiosRegular;