import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL; // Backend API URL

export const getRooms = async () => axios.get(`${API_BASE_URL}`);
export const bookRooms = async (count) => axios.post(`${API_BASE_URL}/book`, { count });
export const resetRooms = async () => axios.post(`${API_BASE_URL}/reset`);
export const randomizeRooms = async () => axios.post(`${API_BASE_URL}/randomize`);
