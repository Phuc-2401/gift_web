<template>
  <div class="register-page">
    <div class="register-form">
      <h1>Đăng Ký</h1>
      <v-form @submit.prevent="register">
        <div class="register-input">
          <v-text-field
            class="input"
            v-model="name"
            label="Tên"
            type="text"
            dense
            outline
          ></v-text-field>
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
            label="Mật khẩu"
            type="password"
            outline
            dense
          ></v-text-field>
          <v-text-field
            class="input"
            v-model="repassword"
            label="Nhập lại mật khẩu"
            type="password"
            outline
            dense
          ></v-text-field>
          <v-btn type="submit" class="register-button">Đăng ký</v-btn>
        </div>
        <div class="login-router">
          Bạn đã có tài khoản?
          <router-link style="color: #dd5d5d; text-decoration: none" to="login"
            >Đăng nhập ngay</router-link
          >
        </div>
      </v-form>
    </div>
  
  </div>
</template>

<script>
import { register } from "@/api/auth_api";
export default {
  name: "RegisterPage",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      repassword: "",
 
    };
  },
  methods: {
    async register() {
      if (this.password !== this.repassword) {
        this.$toast.error("Mật khẩu không khớp");
        return;
      }
      try {
        const response = await register(this.name, this.email, this.password);
        if (response.status === 200) {
          this.$toast.success("Đăng ký thành công");
          this.$router.push("/login");
        }else{
          this.$toast.error("Đăng ký thất bại");
        }
      } catch (err) {
        this.$toast.error(err.response.data.message);
      }
    },
   
  },
};
</script>
<style scoped>
.register-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
}

.register-form {
  width: 400px;
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.register-input {
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

.login-router {
  text-align: right;
  margin-top: 10px;
  color: rgb(94, 94, 94);
}

.register-button {
  box-shadow: none;
  background-color: #dd5d5d !important;
  color: #fff !important;
  font-weight: 500;
}

.register-button:hover {
  box-shadow: none;
  background-color: #fff !important;
  color: #dd5d5d !important;
  border: #dd5d5d 1px solid;
  font-weight: 500;
  transition: background-color 0.5s ease, color 0.5s ease;
}
.qr-code {
  text-align: center;
  margin-bottom: 20px;
}

.input-fields {
  display: flex;
  justify-content: space-between;
}

.code-input {
  width: 40px;
  text-align: center;
}
</style>
