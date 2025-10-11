import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ROLE } from '../../bff/constants/roles.js';
import { Content, H2 } from '../../components';
import { useServerRequest } from '../../hooks';
import { TableRow, UserRow } from './components';

const UsersContainer = ({ className }) => {
    const [users, setUsers] = useState([]);
    const [roles, setRoles] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);

    const requestServer = useServerRequest();

    const onUserRemove = async userId => {
        const res = await requestServer('removeUser', userId);
        if (!res.error) {
            setUsers(prevUsers => prevUsers.filter(user => user.id !== userId));
        } else {
            setErrorMessage(res.error);
        }
    };

    useEffect(() => {
        Promise.all([requestServer('fetchUsers'), requestServer('fetchRoles')]).then(
            ([usersRes, rolesRes]) => {
                if (usersRes.error || rolesRes.error) {
                    setErrorMessage(usersRes.error || rolesRes.error);
                    return;
                }

                setUsers(usersRes.res);
                setRoles(rolesRes.res);
            }
        );
    }, []);

    return (
        <div className={className}>
            <Content error={errorMessage}>
                <H2>Пользователи</H2>
                <div>
                    <TableRow>
                        <div className="login-column">Логин</div>
                        <div className="registered-at-column">Дата регистрации</div>
                        <div className="role-column">Роль</div>
                    </TableRow>
                    {users.map(({ id, login, registeredAt, roleId }) => (
                        <UserRow
                            key={id}
                            id={id}
                            login={login}
                            registeredAt={registeredAt}
                            roleId={roleId}
                            roles={roles.filter(({ id: roleId }) => roleId !== ROLE.GUEST)}
                            onUserRemove={() => onUserRemove(id)}
                        />
                    ))}
                </div>
            </Content>
        </div>
    );
};

export const Users = styled(UsersContainer)`
    margin: 0 auto;
    display: flex;
    width: 570px;
    flex-direction: column;
`;
