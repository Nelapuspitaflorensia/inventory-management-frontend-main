import axios from "axios";
import { useAuthStore } from "@/store/authStore";

const apiClient = axios.create({
  // Gantilah baseURL sesuai dengan URL backend Anda di Vercel
  baseURL: "https://inventory-management-backend-main.vercel.app/api", // URL backend di Vercel
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor untuk request
apiClient.interceptors.request.use(
  (config) => {
    const authStore = useAuthStore();
    const token = authStore.token; // Ambil token dari authStore

    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Jika token ada, tambahkan Authorization header
    } else {
      console.warn("No token found in auth store"); // Peringatan jika tidak ada token
    }

    return config;
  },
  (error) => {
    return Promise.reject(error); // Jika terjadi error, lanjutkan dengan promise reject
  }
);

// Interceptor untuk response
apiClient.interceptors.response.use(
  (response) => {
    return response; // Jika response berhasil, kembalikan response tersebut
  },
  (error) => {
    if (error.response) {
      // Jika ada response error dari server
      console.error("Error during API request:", error.response.data);
      // Misalnya, jika status error 401 (Unauthorized), Anda bisa mengarahkan pengguna untuk login ulang
      if (error.response.status === 401) {
        console.warn("Unauthorized, redirecting to login...");
        // Tambahkan logic untuk redirect atau logout jika perlu
      }
    } else if (error.request) {
      // Jika request tidak mendapatkan response
      console.error("No response received:", error.request);
    } else {
      // Jika ada error dalam setting request
      console.error("Error in setting up the request:", error.message);
    }
    return Promise.reject(error); // Return error
  }
);

export default apiClient;
