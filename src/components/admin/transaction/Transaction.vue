<template>
  <div class="transaction-list">
    <div class="card">
      <div class="header">
        <h2>Daftar Transaksi</h2>
      </div>

      <div class="table-responsive">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Karyawan</th>
              <th>Barang</th>
              <th>Jumlah</th>
              <th>Tanggal</th>
              <th>Pengembalian</th>
              <th>Status</th>
              <th class="action-column">Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="transaction in transactions" :key="transaction.kode">
              <td>{{ transaction.kode }}</td>
              <td>{{ transaction.namaKaryawan }}</td>
              <td>{{ transaction.namaBarang }}</td>
              <td>{{ transaction.jumlahPinjam }}</td>
              <td>{{ transaction.tanggalPinjam }}</td>
              <td>{{ transaction.tanggalKembali }}</td>
              <td>{{ transaction.status }}</td>
              <td class="action-buttons">
                <button
                  class="verif-btn"
                  @click="verifikasi(transaction)"
                  :disabled="transaction.status === 'Returned'"
                >
                  {{
                    transaction.status === "Returned"
                      ? "Returned"
                      : "Verifikasi"
                  }}
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      transactions: [
        {
          kode: "2024001",
          namaKaryawan: "Budiono",
          namaBarang: "Acer Nitro 15 AN515-58",
          jumlahPinjam: 1,
          tanggalPinjam: "2024-8-10",
          tanggalKembali: "2024-8-17",
          status: "Borrowed",
        },
        {
          kode: "2024002",
          namaKaryawan: "Sisil",
          namaBarang: "Lenovo LOQ 15 15IRH8",
          jumlahPinjam: 1,
          tanggalPinjam: "2024-8-10",
          tanggalKembali: "2024-8-17",
          status: "Borrowed",
        },
        {
          kode: "2024000",
          namaKaryawan: "Jamilah",
          namaBarang: "Lenovo LOQ 15 15IRH8",
          jumlahPinjam: 1,
          tanggalPinjam: "2024-8-10",
          tanggalKembali: "2024-8-27",
          status: "Borrowed",
        },
        {
          kode: "2024001",
          namaKaryawan: "Asep",
          namaBarang: "Lenovo LOQ 15 15IRH8",
          jumlahPinjam: 1,
          tanggalPinjam: "2024-8-10",
          tanggalKembali: "2024-8-27",
          status: "Borrowed",
        },
      ],
    };
  },
  methods: {
    verifikasi(transaction) {
      if (transaction.status === "Borrowed") {
        transaction.status = "Returned";
      }
    },
  },
};
</script>

<style scoped>
.transaction-list {
  margin: 20px 0;
}

/* Card styling */
.card {
  width: 82%;
  padding: 24px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

/* Header styling */
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

/* Table styling */
.table-responsive {
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  border: 0px 5px solid #f3f1f1;
  padding: 12px 15px;
  text-align: center;
  vertical-align: middle;
  border-bottom: 1px solid #ddd;
}

td {
  color: black;
}

th {
  background-color: #f4f4f8;
  color: rgb(24, 23, 23);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

tr:hover {
  background-color: #ddd;
}

button {
  padding: 6px 12px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  font-size: 14px;
}

.verif-btn {
  background-color: #4caf50;
  color: white;
}

.verif-btn:hover {
  background-color: #45a049;
}

.verif-btn[disabled] {
  background-color: #ccc;
  cursor: not-allowed;
}

/* Responsive design */
@media (max-width: 600px) {
  th,
  td {
    padding: 8px 10px;
  }
  .action-buttons {
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }
  .action-buttons button {
    margin: 5px 0;
  }
}
</style>
