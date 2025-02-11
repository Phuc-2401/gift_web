import axiosInstance from "../axiosInstance";

export const getHome = async () => {
  const response = await axiosInstance.get("/viewHomePage");
  console.log(response.data);
  return response.data;
};
