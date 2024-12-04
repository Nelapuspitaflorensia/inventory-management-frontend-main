// src/views/UserView.vue
<template>
  <div class="user-view">
    <div class="scrollable-content">
      <ItemList v-if="currentComponent === 'items'" />
      <TransactionList v-if="currentComponent === 'transactions'" />
      <HistoryList v-if="currentComponent === 'history'" />
    </div>
  </div>
</template>

<script>
import ItemList from "@/components/user/item/ItemList.vue";
import TransactionList from "@/components/user/transaction/Transaction.vue";
import HistoryList from "@/components/user/history/HistoryList.vue";

export default {
  components: {
    ItemList,
    TransactionList,
    HistoryList,
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
.user-view {
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
  padding: 20px;
  height: 100%;
}

@media (max-width: 576px) {
  .user-view {
    margin-left: 0;
    padding: 15px;
  }

  .component-container {
    padding: 15px;
  }
}
</style>
