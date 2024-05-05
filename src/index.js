import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { RouterProvider } from 'react-router-dom';
import Routes from './routes/Routes';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';

const basename = '/goit-react-hw-05-movies/';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router basename={basename}>
    </Router>
    <RouterProvider router={Routes}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
