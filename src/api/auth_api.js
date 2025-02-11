import axiosInstance from "../axiosInstance";

export const login = async (email, password) => {
  try {
    const response = await axiosInstance.post("/login", {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const register = async (email, password) => {
  try {
    const response = await axiosInstance.post("/register", {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const getAuthQr = async (name, email, password) => {
  try {
    const response = await axiosInstance.post("/get-qr-code", {
      name,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
