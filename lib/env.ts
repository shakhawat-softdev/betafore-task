const fallbackApiBaseUrl = "https://mm-assesment-server.vercel.app/api/v1";

export const API_BASE_URL = process.env.API_BASE_URL ?? fallbackApiBaseUrl;
