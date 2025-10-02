import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import './blog.css';
import { Footer, Header } from './components';
import { Authorization, Registration } from './pages';

const Content = styled.div`
    padding: 120px 0 120px 0;
    text-align: center;
`;

const AppColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 1000px;
    min-height: 100%;
    background-color: #ffffffff;
    margin: 0 auto;
`;

function Blog() {
    return (
        <AppColumn>
            <Header />
            <Content>
                <Routes>
                    <Route path="/" element={<div>Главная</div>} />
                    <Route path="/login" element={<Authorization />} />
                    <Route path="/register" element={<Registration />} />
                    <Route path="/users" element={<div>Пользователи</div>} />
                    <Route path="/post" element={<div>Новая статья</div>} />
                    <Route path="/post/:postId" element={<div>Статья</div>} />
                    <Route path="*" element={<div>Ошибка</div>} />
                </Routes>
            </Content>
            <Footer />
        </AppColumn>
    );
}

export default Blog;
