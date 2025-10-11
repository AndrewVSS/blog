import styled from 'styled-components';

const IconContainer = ({ className, id, onClick, disabled }) => (
    <div className={className} onClick={disabled ? undefined : onClick}>
        <i className={`fa ${id}`} aria-hidden="true"></i>
    </div>
);

export const Icon = styled(IconContainer)`
    font-size: ${({ size = '20px' }) => size};
    margin: ${({ margin = '0' }) => margin};
    color: ${({ disabled }) => (disabled ? '#ccc' : '#000')};
    display: flex;
    align-items: center;

    &:hover {
        cursor: pointer;
    }
`;
