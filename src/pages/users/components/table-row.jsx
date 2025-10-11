import styled from 'styled-components';

const TableRowContainer = ({ className, children }) => <div className={className}>{children}</div>;

export const TableRow = styled(TableRowContainer)`
    display: flex;
    align-items: center;
    border: ${({ border }) => (border ? '1px solid black;' : '')};

    & > div {
        display: flex;
        margin: 5px 10px;
        padding: 0 10px;
    }

    & .login-column {
        width: 172px;
    }

    & .registered-at-column {
        width: 213px;
    }

    & .role-column {
        width: auto;
    }

    & select {
        height: 32px;
        font-size: 16px;
        padding: 0 8px;
    }
`;
