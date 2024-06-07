import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Importacion RouterDom
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Cuerpo2 from './componentes/Cuerpo2.jsx';


// Constante para crear vinculos
const router=createBrowserRouter(
  [{
    path: '/',
    element: <App />
},
  {path: '/cuerpo2',
    element: <Cuerpo2 />
  }

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    {/* llamar el router */}
    <RouterProvider router={router}/>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
