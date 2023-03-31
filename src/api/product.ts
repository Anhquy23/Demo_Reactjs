import { AxiosResponse } from "axios";
import instance from "./instance";

const { accessToken } = JSON.parse(localStorage.getItem("user")!);

export const getProducts = () => {
  return instance.get("/products");
};

export const removeProducts = (id: number | string) => {
    console.log('token', accessToken)
  return instance.delete("/products/" + id, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
