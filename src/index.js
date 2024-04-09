import React from 'react';
import { createRoot } from 'react-dom/client';
import ApplicationRouter from './routes/applicationRouter';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';

const root = document.getElementById('root');
createRoot(root).render(<ApplicationRouter />);