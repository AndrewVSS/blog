import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { logout } from '../../../actions/logout.js';
import { ROLE } from '../../../bff/constants';
import { Button } from '../../../components';
import { selectUserLogin, selectUserRole, selectUserSession } from '../../../selectors';
import { Icon } from '../components';

const RightAligned = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

const UserName = styled.div`
    margin: 0 10px 0 0;
    font-size: 22px;
`;

const ControlPanelContainer = ({ className }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const roleId = useSelector(selectUserRole);
    const login = useSelector(selectUserLogin);
    const session = useSelector(selectUserSession);

    return (
        <div className={className}>
            <RightAligned>
                {roleId === ROLE.GUEST ? (
                    <Button as={Link} to="/login">
                        Войти
                    </Button>
                ) : (
                    <>
                        <UserName>{login}</UserName>
                        <a onClick={() => dispatch(logout(session))}>
                            <Icon id="fa-sign-out" margin="0 0 0 0" />
                        </a>
                    </>
                )}
            </RightAligned>
            <RightAligned>
                <a onClick={() => navigate(-1)}>
                    <Icon id="fa-backward" margin="10px 0px 0 0" />
                </a>
                <Link to="/post">
                    <Icon id="fa-file-text" margin="10px 0px 0 15px" />
                </Link>
                <Link to="/users">
                    <Icon id="fa-users" margin="10px 0px 0 15px" />
                </Link>
            </RightAligned>
        </div>
    );
};

export const ControlPanel = styled(ControlPanelContainer)``;
