import { useState } from 'react';
import styled from 'styled-components';
import { Icon } from '../../../components/header/components/icon.jsx';
import { useServerRequest } from '../../../hooks/use-server-request.js';
import { TableRow } from './table-row.jsx';

const UserRowContainer = ({
    className,
    id,
    login,
    registeredAt,
    roleId: userRoleId,
    roles,
    onUserRemove,
}) => {
    const [initialRoleId, setInitialRoleId] = useState(userRoleId);
    const [selectedRoleId, setSelectedRoleId] = useState(userRoleId);
    const requestServer = useServerRequest();

    const onRoleChange = ({ target }) => {
        setSelectedRoleId(Number(target.value));
    };

    const onRoleSave = (userId, newUserRoleId) => {
        requestServer('updateUserRole', userId, newUserRoleId).then(() => {
            setInitialRoleId(newUserRoleId);
        });
    };

    const isSaveButtonDisabled = selectedRoleId === initialRoleId;

    return (
        <div className={className}>
            <TableRow border={true}>
                <div className="login-column">{login}</div>
                <div className="registered-at-column">{registeredAt}</div>
                <div className="role-column">
                    <select value={selectedRoleId} onChange={onRoleChange}>
                        {roles.map(({ id: roleId, name: roleName }) => (
                            <option key={roleId} value={roleId}>
                                {roleName}
                            </option>
                        ))}
                    </select>
                    <Icon
                        id="fa-thin fa-floppy-disk"
                        margin="0 0 0 10px"
                        size="30px"
                        disabled={isSaveButtonDisabled}
                        onClick={() => onRoleSave(id, selectedRoleId)}
                    />
                </div>
            </TableRow>
            <Icon id="fa-trash" margin="0 0 0 10px" onClick={onUserRemove} />
        </div>
    );
};

export const UserRow = styled(UserRowContainer)`
    display: flex;
    margin: 10px 0;
    font-size: 18px;
`;
