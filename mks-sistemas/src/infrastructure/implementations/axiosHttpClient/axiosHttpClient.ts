import axios from 'axios';
import { HttpResponse, IHttpClient } from '@infrastructure/contracts';

const baseURL = import.meta.env.VITE_API_MKSChallengeAPI

export class AxiosHttpClient implements IHttpClient {
    
    async request(params: IHttpClient.Params): Promise<HttpResponse> {
        const { data } = await axios.request<HttpResponse>({
            method: params.method,
            url: baseURL+params.url,
            data: params.body,
        })
        
        return {data}
    }
}