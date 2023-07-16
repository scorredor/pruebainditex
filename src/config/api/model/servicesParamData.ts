
export const HttpMethods = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE'
  };
  
export interface ServicesParam {
    paramUrl?: string,
    paramBody?: string,
    method: string,    
    url?: string
}