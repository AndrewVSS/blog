import styled from 'styled-components';

const InputContainer = ({ className, ...props }) => {
    return <input className={className} {...props} />;
};

export const Input = styled(InputContainer)`
    height: 40px;
    margin: 0 0 10px;
    border: 1px solid #000;
    padding: 5px;
    font-size: 16px;
`;
