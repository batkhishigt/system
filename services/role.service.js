import { BehaviorSubject } from 'rxjs';
import getConfig from 'next/config';
import Router from 'next/router'

import { fetchWrapper } from 'helpers';

const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}/role`;

export const roleService = {
    getAll
};
function getAll() {
    return fetchWrapper.get(`${baseUrl}`);
}
