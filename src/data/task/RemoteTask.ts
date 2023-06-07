import { HttpClient, HttpMethod, HttpRequest, HttpResponse } from "../../infra/http/HttpClient";
import generateHttpGeneralResponse from "../../utils/generateHttpGeneralResponse";

export default class RemoteTask{
    private readonly httpClient: HttpClient;
    private readonly baseURL: string;

    constructor(httpClient: HttpClient, baseURL: string){
        this.httpClient = httpClient;
        this.baseURL = baseURL;
    }

    async createTask<T>(data: T){
        const requestConfiguration: HttpRequest<T> = {
            data,
            method: HttpMethod.POST,
            url: `${this.baseURL}/addTask`
        }

        const response: HttpResponse<T> = await this.httpClient.request<T>(requestConfiguration);
        
        return generateHttpGeneralResponse(response);
    }

    async updateTask<T>(data: T, taskId: string){
        const requestConfiguration: HttpRequest<T> = {
            data,
            method: HttpMethod.PUT,
            url: `${this.baseURL}/updateTask/${taskId}`
        }

        const response: HttpResponse<T> = await this.httpClient.request<T>(requestConfiguration);
        
        return generateHttpGeneralResponse(response);
    }

    async deleteTask(taskId: string){
        const requestConfiguration = {
            method: HttpMethod.DELETE,
            url: `${this.baseURL}/deleteTask/${taskId}`
        }

        const response = await this.httpClient.request(requestConfiguration);

        return generateHttpGeneralResponse(response);
    }


    async getTaskById(taskId: string){
        const requestConfiguration = {
            method: HttpMethod.GET,
            url: `${this.baseURL}/getTask/${taskId}`
        }

        const response = await this.httpClient.request(requestConfiguration);

        return generateHttpGeneralResponse(response);
    
    }


    async getAllTasks(){
        const requestConfiguration = {
            method: HttpMethod.GET,
            url: `${this.baseURL}/getTask`,
        }
        
        const response = await this.httpClient.request(requestConfiguration);

        return generateHttpGeneralResponse(response);
    }
} 