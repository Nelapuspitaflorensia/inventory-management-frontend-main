<template>
  <aside :class="['sidebar', { hidden: !isSidebarVisible }]">
    <a class="logo">E-Gudang</a>
    <ul>
      <li v-if="currentRole === 'admin'">
        <a href="#" @click="showComponent('users')" class="nav-link">
          <i class="bi bi-house-door"></i> Users
        </a>
      </li>
      <li>
        <a href="#" @click="showComponent('items')" class="nav-link">
          <i class="bi bi-box"></i> Items
        </a>
      </li>
      <li>
        <a href="#" @click="showComponent('transactions')" class="nav-link">
          <i class="bi bi-cash"></i> Transactions
        </a>
      </li>
      <li v-if="currentRole === 'user'">
        <a href="#" @click="showComponent('history')" class="nav-link">
          <i class="bi bi-clock-history"></i> History
        </a>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
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
  methods: {
    showComponent(component) {
      this.$router.push({ name: this.currentRole, params: { component } });
    },
  },
};
</script>

<style scoped>
.sidebar {
  width: 220px;
  background: #ffffff;
  color: #333;
  padding: 20px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  font-size: 16px;
  font-family: "Arial", sans-serif;
  transition: transform 0.3s ease;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);
}

.sidebar.hidden {
  transform: translateX(-100%);
}

.logo {
  font-size: 28px;
  margin-bottom: 30px;
  font-weight: 600;
  text-align: center;
  color: #004915;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  margin-bottom: 25px;
  text-align: left;
}

.nav-link {
  color: #333;
  text-decoration: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 10px;
  border-radius: 8px;
  transition: background-color 0.3s ease;

  &:hover {
    text-decoration: none;
    background-color: #f1f1f1;
  }

  i {
    margin-right: 12px;
  }
}
</style>
