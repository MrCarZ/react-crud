import RemoteTask from "../../data/task/RemoteTask";
import AxiosHttpClient from "../../infra/http/AxiosHttpClient";
import generateApiUrl from "../../utils/generateApiUrl";

export default function RemoteTaskService(){ 
    return new RemoteTask(new AxiosHttpClient(), generateApiUrl('/tasks'))
}