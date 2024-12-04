import { defineStore } from "pinia";

export const useItemStore = defineStore("item", {
  // Perbaiki penamaan di sini
  state: () => ({
    items: [
      {
        kode: 101,
        nama: "Laptop",
        deskripsi: "Laptop dengan prosesor Intel i5 dan RAM 8GB",
        stok: 10,
      },
      {
        kode: 102,
        nama: "Mouse",
        deskripsi: "Mouse wireless dengan sensor optik",
        stok: 50,
      },
      {
        kode: 103,
        nama: "Keyboard",
        deskripsi: "Keyboard mekanik dengan lampu RGB",
        stok: 25,
      },
      {
        kode: 104,
        nama: "Monitor",
        deskripsi: "Monitor LED 24 inch Full HD",
        stok: 15,
      },
      {
        kode: 105,
        nama: "Printer",
        deskripsi: "Printer inkjet multifungsi",
        stok: 8,
      },
    ],
  }),
  getters: {
    getItemByKode: (state) => (kode) =>
      state.items.find((item) => item.kode === kode),
    totalItems: (state) => state.items.length,
  },
  actions: {
    addItem(item) {
      this.items.push(item);
    },
    updateItem(updatedItem) {
      const index = this.items.findIndex(
        (item) => item.kode === updatedItem.kode
      );
      if (index !== -1) this.items[index] = updatedItem;
    },
    deleteItem(kode) {
      this.items = this.items.filter((item) => item.kode !== kode);
    },
  },
  persist: true,
});
