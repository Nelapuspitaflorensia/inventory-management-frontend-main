<template>
  <div id="app">
    <Header
      v-if="showHeader"
      :currentRole="currentRole"
      @update-role="updateRole"
      @toggle-sidebar="toggleSidebar"
      :isSidebarVisible="isSidebarVisible"
    />

    <div class="app-content">
      <Sidebar
        v-if="showSidebar"
        :currentRole="currentRole"
        :isSidebarVisible="isSidebarVisible"
        @showComponent="navigateTo"
      />

      <div
        class="main-content"
        :class="{ expanded: isSidebarVisible && showSidebar }"
      >
        <router-view
          :key="$route.fullPath"
          :currentComponent="$route.params.component"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/dashboard/Header.vue";
import Sidebar from "./components/dashboard/Sidebar.vue";
import { EventBus } from "./utils/EventBus";

export default {
  components: {
    Header,
    Sidebar,
  },

  data() {
    return {
      currentRole: this.$route.name || "admin",
      isSidebarVisible: true,
      searchTerm: "",
    };
  },

  computed: {
    showHeader() {
      return !this.$route.meta.hideHeader;
    },

    showSidebar() {
      return !this.$route.meta.hideSidebar;
    },
  },

  watch: {
    "$route.name"(newRole) {
      this.currentRole = newRole;
    },
  },

  methods: {
    updateRole(role) {
      this.currentRole = role;
    },

    navigateTo(component) {
      if (this.currentRole === "ADMIN") {
        this.$router.push({ name: "admin", params: { component } });
      } else if (this.currentRole === "USER") {
        this.$router.push({ name: "user" });
      } else {
        this.$router.push({ name: "login" });
      }
    },

    toggleSidebar() {
      this.isSidebarVisible = !this.isSidebarVisible;
    },

    handleSearch(newQuery) {
      console.log("Search term:", newQuery);

      if (this.currentRole === "admin") {
        console.log("Search in admin items");
      } else if (this.currentRole === "user") {
        console.log("Search in user items");
      }
    },
  },

  mounted() {
    EventBus.on("search", this.handleSearch);
  },

  beforeUnmount() {
    EventBus.off("search", this.handleSearch);
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #f5f5f5;
}
</style>
