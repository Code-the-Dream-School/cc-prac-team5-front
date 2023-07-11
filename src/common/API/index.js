import axios from "axios"

const BASE_URL = process.env.REACT_APP_SERVICE_ENDPOINT
export const AuthAPI = async (url, option = {}) => {
    try {
        const newOption = {
            method: 'GET',
            ...option
        }

        const response = await axios(`${ BASE_URL }${ url }`, newOption)
        return response.data
    } catch (error) {
        return error.response
    }
}