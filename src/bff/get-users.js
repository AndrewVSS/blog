export const getUsers = () =>
    fetch('http://localhost:3000/user').then(loadedUsers => loadedUsers.json());
