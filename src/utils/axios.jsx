import axios from "axios"
// const api = "https://jobify-api.herokuapp.com/api/v1/"
const customFetch = axios.create({
    baseURL: "https://jobify-api.herokuapp.com/api/v1/toolkit",
})

export default customFetch