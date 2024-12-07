import axios from "axios";
import { useAuthStore } from "@/store/authStore";

const apiClient = axios.create({
  // Pastikan baseURL sesuai dengan URL backend di Vercel
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
    console.error("Request error:", error);
    return Promise.reject(error); // Jika terjadi error, lanjutkan dengan promise reject
  }
);

// Interceptor untuk response
apiClient.interceptors.response.use(
  (response) => {
    // Response berhasil, kembalikan response tersebut
    return response;
  },
  (error) => {
    if (error.response) {
      // Jika ada response error dari server
      console.error("Error during API request:", error.response.data);

      // Tangani berbagai status error
      switch (error.response.status) {
        case 401:
          console.warn("Unauthorized, redirecting to login...");
          // Tambahkan logic untuk redirect atau logout jika perlu
          break;
        case 404:
          console.error("Not Found: The resource was not found on the server.");
          break;
        case 500:
          console.error("Server error: Something went wrong on the server.");
          break;
        default:
          console.error("An unexpected error occurred.");
      }
    } else if (error.request) {
      // Jika request tidak mendapatkan response
      console.error("No response received:", error.request);
    } else {
      // Jika ada error dalam setting request
      console.error("Error in setting up the request:", error.message);
    }
    return Promise.reject(error); // Return error untuk ditangani di bagian lain
  }
);

export default apiClient;
