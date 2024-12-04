<template>
  <header class="header">
    <div class="header-left">
      <!-- Toggle Sidebar Button -->
      <button class="menu-button" @click="$emit('toggle-sidebar')">
        <i class="fas fa-bars"></i>
      </button>

      <!-- Logo/Brand -->
      <h1 class="brand">Nela Puspita Florensia</h1>
    </div>

    <!-- Search Bar -->
    <div class="search-container">
      <div class="search-box">
        <i class="fas fa-search search-icon"></i>
        <input
          type="text"
          placeholder="Search inventory..."
          v-model="searchQuery"
          @input="handleSearch"
          class="search-input"
        />
        <button v-if="searchQuery" @click="clearSearch" class="clear-button">
          <i class="fas fa-times"></i>
        </button>
      </div>
    </div>

    <div class="header-right">
      <!-- Role Selector -->
      <select
        class="role-select"
        :value="currentRole"
        @change="$emit('update-role', $event.target.value)"
      >
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>

      <!-- User Profile -->
      <div class="user-profile">
        <i class="fas fa-user"></i>
      </div>
    </div>

    <!-- logout-->
    <div class="logout-container">
      <button class="logout-btn btn btn-outline-light" @click="logout">
        Logout
      </button>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    currentRole: {
      type: String,
      required: true,
    },
    isSidebarVisible: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      searchQuery: "",
    };
  },
  methods: {
    selectRole(role) {
      this.$emit("update-role", role);
      const authRole = localStorage.getItem("role");
      const isAuthenticated = localStorage.getItem("auth");

      if (isAuthenticated && authRole == role) {
        this.$router.push({ name: role, params: { component: "items" } });
      } else {
        alert("You don't have access for this role!");
        this.$router.push({ name: "login" });
        this.$emit(isSidebarVisible, false);
      }
    },
    toggleSidebar() {
      this.$emit("toggle-sidebar");
    },
    logout() {
      localStorage.removeItem("auth");
      localStorage.removeItem("role");
      this.$emit("update-role", "admin");
      this.$emit("toggle-sidebar", false);
      this.$router.push({ name: "login" });
    },
    handleSearch() {
      this.$emit("search", this.searchQuery);
    },
    clearSearch() {
      this.searchQuery = "";
      this.$emit("search", "");
    },
  },
  emits: ["update-role", "toggle-sidebar", "search"],
};
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  z-index: 1000;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 20px;
  min-width: 200px;
}

.menu-button {
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 8px;
  border-radius: 4px;
}

.menu-button:hover {
  background-color: #f0f0f0;
}

.brand {
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
}

/* Search Bar Styles */
.search-container {
  flex: 1;
  max-width: 600px;
  margin: 0 20px;
}

.search-box {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
}

.search-input {
  width: 100%;
  padding: 10px 40px;
  border: 1px solid #ddd;
  border-radius: 20px;
  font-size: 0.95rem;
  transition: all 0.3s ease;
}

.search-input:focus {
  outline: none;
  border-color: #4a90e2;
  box-shadow: 0 0 0 2px rgba(74, 144, 226, 0.1);
}

.search-icon {
  position: absolute;
  left: 15px;
  color: #666;
}

.clear-button {
  position: absolute;
  right: 15px;
  background: none;
  border: none;
  color: #666;
  cursor: pointer;
  padding: 0;
}

.clear-button:hover {
  color: #333;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 20px;
  min-width: 200px;
  justify-content: flex-end;
}

.role-select {
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ddd;
  background-color: white;
  cursor: pointer;
}

.user-profile {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.user-profile:hover {
  background-color: #e0e0e0;
}

/* Logout Button */
.logout-container {
  margin-left: 20px;
}

.logout-btn {
  padding: 8px 16px;
  font-size: 0.95rem;
  border-radius: 4px;
  border: 1px solid #ddd;
  background-color: #c0392b; /* Primary color for logout */
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
}

.logout-btn:hover {
  background-color: #d32f2f; /* Darker color on hover */
  border-color: #d32f2f;
}

/* Responsive Styles */
@media (max-width: 768px) {
  .search-container {
    max-width: none;
    margin: 0 10px;
  }

  .header-left {
    min-width: auto;
  }

  .header-right {
    min-width: auto;
  }

  .brand {
    display: none;
  }
  .logout-btn {
    padding: 6px 12px;
    font-size: 0.9rem;
  }
}

@media (max-width: 576px) {
  .header {
    padding: 0 10px;
  }

  .search-input {
    padding: 8px 35px;
  }
}
</style>
