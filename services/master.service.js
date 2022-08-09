import getConfig from 'next/config';

import { fetchWrapper } from 'helpers';

const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}/master`;

export const masterService = {
    create,
    update,
    getAll,
    getById,
    getFree
};
function create(data) {
    return fetchWrapper.post(`${baseUrl}`, { ...data })
        .then(user => {
            return user;
        });
}
function update(id, data) {
    return fetchWrapper.put(`${baseUrl}/${id}`, { ...data })
        .then(user => {
            return user;
        });
}
function getAll(page = 1, limit = 10) {
    return fetchWrapper.get(`${baseUrl}?page=${page}&limit=${limit}`);
}
function getFree() {
    return fetchWrapper.get(`${baseUrl}/free`);
}
function getById(id) {
    return fetchWrapper.get(`${baseUrl}/${id}`);
}