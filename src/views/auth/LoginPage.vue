<template>
    <div class="login-page">
        <div class="login-form">
            <h1>Đăng Nhập</h1>
            <v-form>
                <div class="login-input">
                    <v-text-field class="input" v-model="email" label="Email" type="email" dense outline></v-text-field>

                    <v-text-field class="input" v-model="password" label="Mật Khẩu" type="password" outline
                        dense></v-text-field>
                    <v-btn type="submit" class="login-button">Đăng nhập</v-btn>
                </div>
                <div class="register-router">Bạn chưa có tài khoản? <router-link
                        style="color: #DD5D5D;text-decoration: none;" to="register">Đăng ký ngay</router-link></div>
            </v-form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LoginPage',
    data() {
        return {
            email: '',
            password: ''
        }
    }
}
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
    background-color: #DD5D5D !important;
    color: #fff !important;
    font-weight: 500;
}

.login-button:hover {
    box-shadow: none;
    background-color: #fff !important;
    color: #DD5D5D !important;
    border: #DD5D5D 1px solid;
    font-weight: 500;
    transition: background-color 0.5s ease, color 0.5s ease;
}
</style>