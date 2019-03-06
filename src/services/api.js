import axios from 'axios'
import { getToken } from './auth'

const port = 8000
const api = axios.create({
  baseURL: `http://localhost${port !== 80 ? `:${port}` : ""}/api`
})

api.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
