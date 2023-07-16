/* eslint-disable  @typescript-eslint/no-explicit-any */
export const timeout = parseInt(process.env.REACT_APP_FETCH_TIMEOUT!);

export default class FetchApiUtil {
  public static async fetchWithTimeout(resource: RequestInfo, options: any) {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);

    try {      
      const response = await fetch(resource, {
        ...options,
        signal: controller.signal,
      });      
      clearTimeout(id);      
      return response;
    } catch (e) {
      const optionsData = { ok: false, status: 408 };

      const body = {
        error: { code: 'ER00', message: 'Hubo un error, inténtalo más tarde.' },
      };
      const failed = new Response(JSON.stringify(body), optionsData);
      return failed;
    }
  }
}
