import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ButtonContainer = React.forwardRef(({ children, className, ...props }, ref) => {
    return (
        <button className={className} ref={ref} {...props}>
            {children}
        </button>
    );
});

export const Button = styled(ButtonContainer)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${({ width = '100%' }) => width};
    height: 32px;
    border: 1px solid #000;
    background-color: #eee;
    cursor: pointer;
`;
