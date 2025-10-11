import { setUserRole } from '../api';
import { ROLE } from '../constants';
import { sessions } from '../sessions.js';

export const updateUserRole = async (userSession, userId, newUserRoleId) => {
    const accessRoles = [ROLE.ADMIN];

    if (!sessions.checkAccess(userSession, accessRoles)) {
        return {
            error: 'Доступ запрещен',
            res: null,
        };
    }

    setUserRole(userId, newUserRoleId);

    return {
        error: null,
        res: true,
    };
};
