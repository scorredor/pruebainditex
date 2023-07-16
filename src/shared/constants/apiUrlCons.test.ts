import { ApiUrlCons } from './apiUrlCons';

describe('ApiUrlCons testing', () => {
    test('get current value', () => {
        ApiUrlCons.API_URL_BACK_END_ITUNES = '';

        expect(ApiUrlCons.API_URL_BACK_END_ITUNES).toBe('');        
    });
});