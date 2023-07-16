import FetchApiUtil from './fetchApiUtil'
import { HttpMethods, ServicesParam } from './model/servicesParamData'

function getOptions(method: string, paramBody: string) {
    const headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'x-cors-api-key': process.env.REACT_APP_TOKEN_NO_CORS,
        'origin': 'x-requested-with'
    }

    if (method === HttpMethods.PUT || method === HttpMethods.POST) {
        return {
            method,
            headers,
            body: paramBody,
        }
    }
    else {
        return {
            method,
            headers
        }
    }
}

const handleResponse = (response: Response) => {
    if (!response.ok) {
        return Promise.all([response, response.text()]);
    }
    return response.json();
}

export const consumeService = async ({ method, paramUrl = '', paramBody = '', url }: ServicesParam) => {
    return await FetchApiUtil.fetchWithTimeout(
        url + paramUrl, getOptions(method, paramBody),
    ).then(handleResponse);
}