<template>
  <div class="home-page">
    <h1 class="page-title">Danh Sách Sản Phẩm</h1>
    <div class="images">
      <div v-for="product in products" :key="product.id" class="product-card">
        <img :src="product.image" alt="product image" />
        <div class="product-info">
          <h3>{{ product.name }}</h3>
          <p>{{ product.original_price.toLocaleString() }} VND</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getHome } from "../../api/home_api";
export default {
  name: "HomePage",
  created() {
    console.log("Home page created");
    this.fetchHomeData();
  },
  data() {
    return {
      products: [
        {
          id: 1,
          name: "Quà năm mới",
          image:
            "https://www.angroos.com/wp-content/uploads/2024/12/realistic-New-Year-celebration-scene-featuring-a-luxurious-indoor.jpg",
          original_price: 100000,
        },
        {
          id: 2,
          name: "Quà Valentine",
          image:
            "https://img.freepik.com/premium-photo/happy-valentine-day-gift-2023_781361-70.jpg",
          original_price: 200000,
        },
        {
          id: 3,
          name: "Quà sinh nhật",
          image:
            "https://www.hickoryfarms.com/dw/image/v2/AAOA_PRD/on/demandware.static/-/Sites-Web-Master-Catalog/default/dwff137641/images/products/lets-party-birthday-wine-gift-box-006437-1.jpg?sw=556&sh=680&sm=fit",
          original_price: 300000,
        },
      ],
    };
  },
  methods: {
    async fetchHomeData() {
      try {
        const response = await getHome();
        if (response.status === 200) {
          //   this.products = response.popularProducts;
          console.log("ádasdasd");
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style scoped>
.home-page {
  height: 100vh;
  padding: 50px;
}

.page-title {
  text-align: center;
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
}

.images {
  display: flex;
  justify-content: space-between;
}

.images img {
  width: 20%;
  transition: transform 0.3s ease;
  margin: 20px 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
}

.images img:hover {
  transform: scale(1.1);
}

.product-card {
  width: 30%;
  margin: 20px 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.product-card img {
  width: 100%;
  border-bottom: 1px solid #ddd;
}

.product-info {
  padding: 10px;
  text-align: center;
}

.product-info h3 {
  margin: 10px 0;
  font-size: 18px;
}

.product-info p {
  margin: 0;
  color: #888;
}

.product-card:hover {
  transform: scale(1.05);
}
</style>
