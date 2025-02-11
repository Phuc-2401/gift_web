<template>
    <nav class="navbar">
        <div>
            <ul class="navbar-list">
                <li class="navbar-img">
                    <img src="../assets/logo.jpg" alt="logo" class="logo">
                </li>
                <li class="navbar-item">
                    <div class="nav-home">
                        <router-link to="/home" class="navbar-link" active-class="active-link"
                            exact-active-class="exact-active-link">
                            <span style="margin-right: 8px; font-size: 20px;"></span>Trang chủ
                        </router-link>
                    </div>
                </li>
                <li class="navbar-item">
                    <router-link to="/product" class="navbar-link" active-class="active-link"
                        exact-active-class="exact-active-link">
                        <span style="margin-right: 8px;font-size: 20px;"></span>Sản phẩm
                    </router-link>
                </li>
                <li class="navbar-item dropdown">
                    <router-link to="/category" class="navbar-link" active-class="active-link"
                        exact-active-class="exact-active-link">
                        <span style="margin-right: 8px;font-size: 20px;"></span>Danh mục
                    </router-link>
                    <ul class="dropdown-content">
                        <li><router-link to="/noel" class="dropdown-link">Quà Noel</router-link></li>
                        <li><router-link to="/newyear" class="dropdown-link">Quà Tết</router-link></li>
                        <li><router-link to="/birthday" class="dropdown-link">Quà Sinh Nhật</router-link></li>
                    </ul>
                </li>
                <li class="navbar-item">
                    <router-link to="/combo" class="navbar-link" active-class="active-link"
                        exact-active-class="exact-active-link">
                        <span style="margin-right: 8px;font-size: 20px;"></span>Combo
                    </router-link>
                </li>
                <li class="navbar-item">
                    <router-link to="/contact" class="navbar-link" active-class="active-link"
                        exact-active-class="exact-active-link">
                        <span style="margin-right: 8px;font-size: 20px;"></span>Liên hệ
                    </router-link>
                </li>
                <li class="navbar-item">
                    <router-link to="/cart" class="navbar-link" active-class="active-link"
                        exact-active-class="exact-active-link">
                        <span style="margin-right: 8px;font-size: 20px;"></span>Giỏ
                        hàng
                    </router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    name: "Navbar"
}
</script>
<style scoped>
.navbar>div {
    width: 1250px;
    display: flex;
}

.logo {
    width: 120px;
    height: auto;
}

.navbar {
    background-color: #8C171F;
    display: flex;
    justify-content: center;
    /* Căn giữa nội dung */
    align-items: center;
    width: 100%;
    position: relative;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

}

.navbar-list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style-type: none;
    padding: 0;
    margin: 0;
    width: 100%;
}

.navbar ul li a {
    text-decoration: none;
    color: white;
    font-size: 15px;
    transition: color 0.3s, font-weight 0.3s;
    max-width: 70%;
}

.navbar ul li a:hover {
    color: rgb(140, 140, 140);
    font-weight: bold;
}

.navbar-item .active-link {
    color: rgb(140, 140, 140);
    font-weight: bold;
    padding-bottom: 5px;
}

.navbar-text {
    display: flex;
    flex-direction: column;
}

.navbar-item {
    margin: 20px;
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: #000000;
    min-width: 200px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    z-index: 1;
    list-style-type: none;
    padding: 10px 0;
}

.dropdown-content li {
    padding: 10px 20px;
}

.dropdown-content li a {
    color: black;
    text-decoration: none;
    display: block;
    font-size: 14px;
    transition: background-color 0.3s, color 0.3s;
}

.dropdown-content li a:hover {
    color: black;
    border-radius: 5px;
}

.dropdown:hover .dropdown-content {
    display: block;
}
</style>