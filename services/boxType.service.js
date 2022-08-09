import { BehaviorSubject } from 'rxjs';
import getConfig from 'next/config';

import { fetchWrapper } from 'helpers';

const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}/boxtype`;

export const boxTypeService = {
    getAll
};
function getAll() {
    return fetchWrapper.get(`${baseUrl}`);
}
