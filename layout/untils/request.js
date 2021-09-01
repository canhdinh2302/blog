import axios from 'axios'
console.log(process.env.BASE_URL)
const request = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 3000,
})

export default request
