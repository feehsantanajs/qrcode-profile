import axios from "axios";

export const createUser = axios.create({
  baseURL: 'http://localhost:3000/api/tasks/'
})

