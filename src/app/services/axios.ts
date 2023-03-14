import axios from "axios";

export const userFetch = axios.create({
  baseURL: 'http://localhost:3000/api'
})

