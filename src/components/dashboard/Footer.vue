<template>
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-section">
          <h3 class="footer-title">Warehouse Management System</h3>
          <p class="footer-description">
            Sistem manajemen gudang yang efisien dan mudah digunakan untuk mengontrol inventaris Anda.
          </p>
        </div>
  
        <div class="footer-section">
          <h4 class="footer-subtitle">Quick Links</h4>
          <ul class="footer-links">
            <li><a href="#" @click.prevent="$emit('show-component', 'items')">Inventory</a></li>
            <li><a href="#" @click.prevent="$emit('show-component', 'transactions')">Transactions</a></li>
            <li><a href="#" @click.prevent="$emit('show-component', 'history')">History</a></li>
          </ul>
        </div>
  
        <div class="footer-section">
          <h4 class="footer-subtitle">Contact</h4>
          <ul class="footer-contact">
            <li><i class="fas fa-envelope"></i> support@warehouse.com</li>
            <li><i class="fas fa-phone"></i> +62 123 456 789</li>
            <li><i class="fas fa-map-marker-alt"></i> Yogyakarta, Indonesia</li>
          </ul>
        </div>
      </div>
  
      <div class="footer-bottom">
        <p>&copy; {{ currentYear }} Warehouse Management System. All rights reserved.</p>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'Footer',
    computed: {
      currentYear() {
        return new Date().getFullYear()
      }
    },
    emits: ['show-component']
  }
  </script>
  
  <style scoped>
  .footer {
    width: 81%;
    background-color: #2c3e50;
    color: white;
    padding: 40px 0 20px;
    margin-top: auto;
    margin-left: 19%;
  }
  
  .footer-content {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
    padding: 0 20px;
  }
  
  .footer-section {
    display: flex;
    flex-direction: column;
  }
  
  .footer-title {
    font-size: 1.5rem;
    margin-bottom: 15px;
    color: #4f46e5;
  }
  
  .footer-subtitle {
    font-size: 1.2rem;
    margin-bottom: 15px;
    color: #e2e8f0;
  }
  
  .footer-description {
    color: #cbd5e1;
    line-height: 1.6;
  }
  
  .footer-links,
  .footer-contact {
    list-style: none;
    padding: 0;
  }
  
  .footer-links li,
  .footer-contact li {
    margin-bottom: 10px;
  }
  
  .footer-links a {
    color: #cbd5e1;
    text-decoration: none;
    transition: color 0.3s ease;
  }
  
  .footer-links a:hover {
    color: #4f46e5;
  }
  
  .footer-contact li {
    display: flex;
    align-items: center;
    color: #cbd5e1;
  }
  
  .footer-contact i {
    margin-right: 10px;
    color: #4f46e5;
    width: 20px;
  }
  
  .footer-bottom {
    margin-top: 40px;
    padding-top: 20px;
    border-top: 1px solid #475569;
    text-align: center;
    color: #cbd5e1;
    font-size: 0.9rem;
  }
  
  /* Responsive Styles */
  @media (max-width: 768px) {
    .footer-content {
      grid-template-columns: repeat(2, 1fr);
    }
  
    .footer-section:first-child {
      grid-column: 1 / -1;
    }
  }
  
  @media (max-width: 576px) {
    .footer-content {
      grid-template-columns: 1fr;
      gap: 30px;
    }
  
    .footer {
      padding: 30px 0 15px;
    }
  
    .footer-section {
      text-align: center;
    }
  
    .footer-contact li {
      justify-content: center;
    }
  }
  </style>