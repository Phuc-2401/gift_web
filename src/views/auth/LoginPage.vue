<template>
  <div class="login-page">
    <div class="login-form">
      <h1>Đăng Nhập</h1>
      <v-form @submit.prevent="handleLogin">
        <div class="login-input">
          <v-text-field
            class="input"
            v-model="email"
            label="Email"
            type="email"
            dense
            outline
          ></v-text-field>

          <v-text-field
            class="input"
            v-model="password"
            label="Mật Khẩu"
            type="password"
            outline
            dense
          ></v-text-field>
          <v-btn type="submit" class="login-button">Đăng nhập</v-btn>
        </div>
        <div class="register-router">
          Bạn chưa có tài khoản?
          <router-link
            style="color: #dd5d5d; text-decoration: none"
            to="register"
            >Đăng ký ngay</router-link
          >
        </div>
      </v-form>
    </div>
  </div>
</template>

<script>
import { login } from "@/api/auth_api";
export default {
  name: "LoginPage",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async handleLogin() {
      try {
        const response = await login(this.email, this.password);
        if (response.status === 200) {
          this.$toast.success("Đăng nhập thành công");
          this.$router.push("/home");
        }
      } catch (err) {
        this.$toast.error("Tài khoản hoặc mật khẩu không chính xác");
      }
    },
  },
};
</script>
<style scoped>
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
}

.login-form {
  width: 400px;
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.login-input {
  display: flex;
  flex-direction: column;
}

.input {
  margin-bottom: 10px;
  border-radius: 12px;
}

h1 {
  text-align: center;
  margin-bottom: 10px;
}

.register-router {
  text-align: right;
  margin-top: 10px;
  color: rgb(94, 94, 94);
}

.login-button {
  box-shadow: none;
  background-color: #dd5d5d !important;
  color: #fff !important;
  font-weight: 500;
}

.login-button:hover {
  box-shadow: none;
  background-color: #fff !important;
  color: #dd5d5d !important;
  border: #dd5d5d 1px solid;
  font-weight: 500;
  transition: background-color 0.5s ease, color 0.5s ease;
}
</style>
