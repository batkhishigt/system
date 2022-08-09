import getConfig from 'next/config';

import { fetchWrapper } from 'helpers';

const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}/khoroo`;

export const khorooService = {
    getAll,
    getByDistrictId,
    getById
};
function getAll() {
    return fetchWrapper.get(`${baseUrl}`);
}
function getById(id) {
    return fetchWrapper.get(`${baseUrl}/${id}`);
}
function getByDistrictId(id) {
    return fetchWrapper.get(`${publicRuntimeConfig.apiUrl}/district/${id}/khoroos?sort=number`);
}