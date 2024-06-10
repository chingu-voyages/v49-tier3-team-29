// Create a .env file with VITE_BACKENDURL to make requests to backend
const backendURL = import.meta.env.VITE_BACKENDURL;

export const bookBaseURL = `${backendURL}/books`;
export const userBaseURL = `${backendURL}/users`;
export const listBaseURL = `${backendURL}/lists`;
export const reviewBaseURL = `${backendURL}/reviews`;
