import axiosInstance from "../axiosInstance";

export const login = async (email, password) => {
    const response = await axiosInstance.post("/login", {
      email,
      password,
    });
    return response.data;
};
export const register = async (name,email, password, google2fa_code) => {
    const response = await axiosInstance.post("/register", {
      name,
      email,
      password,
      google2fa_code
    });
    return response.data;

};
export const getAuthQr = async (name, email, password) => {
    const response = await axiosInstance.post("/get-qr-code", {
      name,
      email,
      password,
    });
    console.log(response.data);
    return response.data;

};
