import axios, { Axios, AxiosResponse } from "axios";
import { HttpClient, HttpRequest } from "./HttpClient";

export default class AxiosHttpClient implements HttpClient{
    private readonly axios: Axios = axios;

    async request<T>(requestParameters: HttpRequest<T>){
        const { data, header, url, method } = requestParameters;

        let response: AxiosResponse;

        try{
            response = await this.axios.request({
                headers: header,
                url,
                method,
                data,
            });
        }
        catch(err: any){
            throw new Error(err);
        }

        return {
            header: response.headers,
            statusCode: response.status,
            data: response.data
        };
    }
}