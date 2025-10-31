import { useSelector } from 'react-redux';
import { server } from '../bff/index.js';
import { selectUserSession } from '../selectors/select-user-session.js';

export const useServerRequest = () => {
    const session = useSelector(selectUserSession);

    return (operation, ...params) => {
        const request = ['register', 'authorize', 'fetchPost'].includes(operation)
            ? params
            : [session, ...params];

        return server[operation](...request);
    };
};
