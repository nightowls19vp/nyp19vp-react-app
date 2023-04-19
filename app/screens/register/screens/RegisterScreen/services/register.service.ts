import { URL_HOST } from "./../../../../../core/config/api/api.config";
import axios from "axios";
import { IRegisterReq, IRegisterRes } from "../interfaces/register.interface";

export const register = async (registerInfo: IRegisterReq) => {
  const registerEndpoint = "api/auth/register";
  const reqUrl = `${URL_HOST}${registerEndpoint}`;
  console.log(reqUrl);

  try {
    const res = await axios.post(reqUrl, {
      name: registerInfo.name,
      username: registerInfo.username,
      password: registerInfo.password,
      phone: registerInfo.phone,
      dob: registerInfo.dob,
    });
    console.log(res.data);

    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      let response: IRegisterRes = {
        statusCode: error.response?.status ?? 500,
        message: error.response?.statusText ?? "",
      };

      if (!error?.response) {
        console.log("No Server Response");
        response.message = "Mất kết nối với server";
      } else if (error.response?.status === 400) {
        response.message = "Dữ liệu không hợp lệ";
      } else {
        console.log("Login Failed");
        response.message = "Đăng ký không thành công";
      }
      return response;
    }
  }
};
