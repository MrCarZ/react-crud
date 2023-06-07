export enum HttpMethod {
    POST = 'post',
    GET = 'get',
    PUT = 'put',
    DELETE = 'delete',
    PATCH = 'patch'
}

export enum HttpStatus {
    SUCCESS = 200,
    CREATED = 201,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    SERVER_ERROR = 500
}

export declare interface HttpRequest<T>{
    method: HttpMethod;
    url: string;
    data?: T;
    header?: any;
}

export declare interface HttpResponse<T>{
    statusCode: HttpStatus;
    header: any;
    data?: T;
}

export interface HttpClient {
    request<T>(params: HttpRequest<T>): Promise<HttpResponse<T>>;
} 