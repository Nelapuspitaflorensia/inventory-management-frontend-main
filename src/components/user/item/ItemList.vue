<template>
  <div class="item-list">
    <div class="card">
      <div class="header">
        <h2>Daftar Item</h2>
      </div>
    </div>
    <div class="item-card">
      <ItemCard
        v-for="item in items"
        :key="item.id"
        :item="item"
        @edit-item="editItem"
        @delete-item="deleteItem"
      />
    </div>
    <Modal :visible="showForm" @close="cancelEditForm">
      <ItemForm
        :item="selectedItem"
        :isEdit="isEdit"
        @submit="handleSubmit"
        @cancel="cancelEditForm"
      />
    </Modal>
  </div>
</template>

<script>
import ItemCard from "./ItemCard.vue";
import Modal from "@/components/Modal.vue";
import ItemForm from "./ItemForm.vue";

export default {
  components: {
    ItemCard,
    ItemForm,
    Modal,
  },
  data() {
    return {
      items: [
        {
          id: 1,
          name: "Laptop",
          deskripsi: "Merupakan barang elektronik",
          stok: 10,
          price: "Rp 7.000.000",
        },
        {
          id: 2,
          name: "Meja",
          deskripsi: "Merupakan alat - alat Furniture",
          stok: 5,
          price: "Rp 1.200.000",
        },
        {
          id: 3,
          name: "Kursi",
          deskripsi: "Merupakan alat-alat Furniture",
          stok: 2,
          price: "Rp 500.000",
        },
      ],
      showForm: false,
      selectedItem: null,
      isEdit: false,
    };
  },
  methods: {
    showAddForm() {
      this.selectedItem = { id: "", name: "", deskripsi: "", stok: "" };
      this.isEdit = false;
      this.showForm = true;
    },
    editItem(item) {
      this.selectedItem = { ...item };
      this.isEdit = true;
      this.showForm = true;
    },
    handleSubmit(item) {
      if (this.isEdit) {
        const index = this.items.findIndex((i) => i.id === item.id);
        if (index !== -1) {
          this.items.splice(index, 1, item);
        }
      } else {
        item.id = Date.now();
        this.items.push(item);
      }
      this.showForm = false;
      this.selectedItem = null;
      this.isEdit = false;
    },
    cancelEditForm() {
      // Nama metode diperbaiki
      this.showForm = false;
      this.isEdit = false;
      this.selectedItem = null;
    },
    deleteItem(id) {
      this.items = this.items.filter((item) => item.id !== id);
    },
  },
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

h2 {
  color: black;
  font-weight: bold;
}

button {
  margin-right: 5px;
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  background-color: #42b983;
}

button:last-of-type {
  background-color: #5045b1;
}
</style>
