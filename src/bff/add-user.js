import { generateDate } from './generate-date.js';

export const addUser = (login, password) =>
    fetch('http://localhost:3000/user', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({
            login,
            password,
            registed_at: generateDate(),
            role_id: 2,
        }),
    });
