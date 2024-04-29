import {HttpResponse, IHttpClient, ParamsHttp,} from '@infrastructure/contracts';
  
  export class AxiosHttpClientInMemory implements IHttpClient {
    method?: string;
    url?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data?: any;
  
    response: HttpResponse = {data: ''};
  
    async request(params: ParamsHttp): Promise<HttpResponse> {
      this.method = params.method;
      this.url = params.url;
      this.data = params.body;
      return await Promise.resolve(this.response);
    }
  }