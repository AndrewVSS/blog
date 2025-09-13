import styled from 'styled-components';
import { Icon } from './icon.jsx';
import { Link, useNavigate } from 'react-router-dom';

const RightAligned = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const Styledlink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 32px;
    border: 1px solid #000;
    background-color: #eee;
`;

const ControlPanelContainer = ({ className }) => {
    const navigate = useNavigate();

    return (
        <div className={className}>
            <RightAligned>
                <Styledlink to="/login">Войти</Styledlink>
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
