import getConfig from 'next/config';

import { fetchWrapper } from 'helpers';

const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}/area`;

export const areaService = {
    getByDistrictId
};
function getAll() {
    return fetchWrapper.get(`${baseUrl}`);
}
function getByDistrictId(id) {
    return fetchWrapper.get(`${publicRuntimeConfig.apiUrl}/district/${id}/areas?sort=number`);
}
