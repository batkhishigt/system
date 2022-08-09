import getConfig from 'next/config';

import { fetchWrapper } from 'helpers';

const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}/district`;

export const districtService = {
    getAll,
    getById
};
function getAll() {
    return fetchWrapper.get(`${baseUrl}`);
}
function getById(id) {
    return fetchWrapper.get(`${baseUrl}/${id}`);
}
