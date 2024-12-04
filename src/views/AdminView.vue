<template>
  <div class="admin-view">
    <div class="scrollable-content">
      <ItemList v-if="currentComponent === 'items'" />
      <UserList v-if="currentComponent === 'users'" />
      <TransactionList v-if="currentComponent === 'transactions'" />
    </div>
  </div>
</template>

<script>
import ItemList from "@/components/admin/item/ItemList.vue";
import UserList from "@/components/admin/user/UserList.vue";
import TransactionList from "@/components/admin/transaction/Transaction.vue";

export default {
  components: {
    ItemList,
    UserList,
    TransactionList,
  },
  props: {
    component: {
      type: String,
      default: "items",
    },
  },
  computed: {
    currentComponent() {
      return this.component;
    },
  },
};
</script>

<style scoped>
.admin-view {
  width: 100%;
  padding: 20px;
  margin-top: 60px;
  margin-left: 240px;
  min-height: calc(100vh - 60px);
  background-color: #f5f5f5;
}

.component-container {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 0;
  height: 100%;
}

@media (max-width: 576px) {
  .admin-view {
    margin-left: 0;
    padding: 15px;
  }
}
</style>
