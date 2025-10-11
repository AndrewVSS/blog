import { H2 } from '../h2/h2.jsx';

export const Content = ({ children, error }) =>
    error ? (
        <>
            <H2>Ошибка</H2>
            <div>{error}</div>
        </>
    ) : (
        children
    );
