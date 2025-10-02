import { createRoot } from 'react-dom/client';
import Blog from './blog.jsx';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store.js';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Provider store={store}>
            <Blog />
        </Provider>
    </BrowserRouter>
);
