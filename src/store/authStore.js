import { defineStore } from "pinia";

export const useAuthStore = defineStore("authStore", {
  state: () => ({
    token: localStorage.getItem("token") || null,
    role: localStorage.getItem("role") || null,
  }),
  actions: {
    setToken(token) {
      this.token = token;
      localStorage.setItem("token", token);
    },
    setRole(role) {
      this.role = role;
      localStorage.setItem("role", role);
    },
    logout() {
      this.token = null;
      this.role = null;
      localStorage.removeItem("token");
      localStorage.removeItem("role");
    },
  },
});
