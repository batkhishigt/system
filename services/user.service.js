import { BehaviorSubject } from 'rxjs';
import getConfig from 'next/config';
import Router from 'next/router'

import { fetchWrapper } from 'helpers';

const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}/users`;
const userSubject = new BehaviorSubject(process.browser && JSON.parse(localStorage.getItem('user')));

export const userService = {
    user: userSubject.asObservable(),
    get userValue() { return userSubject.value },
    create,
    update,
    login,
    logout,
    getAll,
    getById
};

function login(email, password) {
    return fetchWrapper.post(`${baseUrl}/login`, { email, password })
        .then(user => {
            userSubject.next(user);
            localStorage.setItem('user', JSON.stringify(user));
            return user;
        });
}

function logout() {
    // remove user from local storage, publish null to user subscribers and redirect to login page
    localStorage.removeItem('user');
    userSubject.next(null);
    Router.push('/login');
}
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