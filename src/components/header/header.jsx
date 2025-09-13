import styled from 'styled-components';
import { ControlPanel, Logo } from './components';

const Discription = styled.div`
    font-style: italic;
`;

const HeaderContainer = ({ className }) => (
    <header className={className}>
        <Logo />
        <Discription>
            Веб-технологии
            <br />
            Написание кода
            <br />
            Разбор ошибок
        </Discription>
        <ControlPanel />
    </header>
);
export const Header = styled(HeaderContainer)`
    position: fixed;
    display: flex;
    justify-content: space-between;
    top: 0;
    width: 1000px;
    background-color: #fff;
    height: 120px;
    padding: 20px 40px;
    box-shadow: 0px 0px 10px #000;
`;
