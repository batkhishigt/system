import getConfig from 'next/config';

import { fetchWrapper } from 'helpers';

const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}/mastertype`;

export const masterTypeService = {
    getAll
};
function getAll() {
    return fetchWrapper.get(`${baseUrl}`);
}
