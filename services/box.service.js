import getConfig from 'next/config';

import { fetchWrapper } from 'helpers';

const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}/box`;

export const boxService = {
    create,
    update,
    getAll,
    getById,
    getBoxStatus,
    getBoxBySearchTool
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
function getById(id) {
    return fetchWrapper.get(`${baseUrl}/${id}`);
}
function getNoMaster(id) {
    return fetchWrapper.get(`${baseUrl}/${id}?master=null`);
}
function getBoxStatus(district, khoroo, area, status) {
    return fetchWrapper.get(`${baseUrl}/status?1=1${district != 0 ? `&district=${district
        }` : ""}${khoroo != 0 ? `&khoroo=${khoroo
            }` : ""}${area != 0 ? `&area=${area
                }` : ""}`);
}
function getBoxBySearchTool(district, khoroo, area, status) {
    return fetchWrapper.get(`${baseUrl}/control?1=1${district != 0 ? `&district=${district
        }` : ""}${khoroo != 0 ? `&khoroo=${khoroo
            }` : ""}${area != 0 ? `&area=${area
                }` : ""}${status != 0 ? `&statusMain=${status
                    }` : ""}`);
}