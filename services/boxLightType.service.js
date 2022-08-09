import { BehaviorSubject } from 'rxjs';
import getConfig from 'next/config';
import Router from 'next/router'

import { fetchWrapper } from 'helpers';

const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}/boxlighttype`;

export const boxLightTypeService = {
    getAll
};
function getAll() {
    return fetchWrapper.get(`${baseUrl}`);
}
