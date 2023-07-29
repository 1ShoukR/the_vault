

type Config = {
  body?: string;
  method?: string;
  mode?: RequestMode;
  cache?: RequestCache;
  credentials?: RequestCredentials;
  headers?: HeadersInit;
};

type Endpoint = string;

export async function client(endpoint: Endpoint, { body, ...customConfig }: Config = {}, token: string | null = null): Promise<any> {
    const headers: HeadersInit = { 'Content-Type': 'application/json' }
    if (token) {
        headers.Authorization = `Bearer ${token}`
    }

    const config: RequestInit = {
        method: body ? 'POST' : 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        ...customConfig,
        headers: {
            ...headers,
            ...customConfig.headers,
        },
    }

    if (body) {
        config.body = JSON.stringify(body)
    }

    let data

    try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}${endpoint}`, config)
        data = await response.json()
        if (response.ok) {
            return data
        }
        throw new Error(response.statusText)
    } catch (err: any) {
        return Promise.reject(err.message ? err.message : data)
    }
}

client.get = function (endpoint: Endpoint, token: string | null = null, customConfig: Config = {}): Promise<any> {
    return client(endpoint, { ...customConfig, method: 'GET' }, token)
}

client.post = function (endpoint: Endpoint, body: any, token: string | null = null, customConfig: Config = {}): Promise<any> {
    return client(endpoint, { ...customConfig, body: JSON.stringify(body), method: 'POST' }, token)
}
