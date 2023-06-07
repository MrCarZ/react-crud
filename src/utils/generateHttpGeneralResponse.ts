import { HttpResponse, HttpStatus } from "../infra/http/HttpClient";

export default function generateHttpGeneralResponse<T>(response: HttpResponse<T>) {

    switch(response.statusCode){
        case HttpStatus.BAD_REQUEST:
            throw new Error("Requisição Inválida - Revise os parâmetros enviados!");
        case HttpStatus.FORBIDDEN:
            throw new Error("Requisição bloqueada!");
        case HttpStatus.NOT_FOUND:
            throw new Error("Entidade não encontrada!");
        case HttpStatus.UNAUTHORIZED:
            throw new Error("Usuário não possui permissão de acesso!");
        case HttpStatus.SERVER_ERROR:
            throw new Error("Erro interno do servidor, contacte a equipe de suporte!");
        default:
            return Promise.resolve(response); 
    }



}