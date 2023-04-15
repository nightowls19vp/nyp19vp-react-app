import { URL_HOST } from './../../../../../../core/config/api/api.config';
import axios from "axios"
import { ILoginReq, ILoginRes } from "../interfaces/login.interface"

export const login = async (loginInfo: ILoginReq): Promise<ILoginRes> => {
    const loginEndpoint = "api/auth/login/mobile";
    const reqUrl = `${URL_HOST}${loginEndpoint}`;
    console.log(reqUrl);


    const res = await axios.post(reqUrl, {
        username: loginInfo.username,
        password: loginInfo.password
    });

    const loginRes: ILoginRes = res.data;

    console.log(res.data);

    return res as unknown as ILoginRes;
}