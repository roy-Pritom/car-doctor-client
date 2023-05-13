import React from 'react'
import ReactDOM from 'react-dom/client'

import router from './routes/Routes.jsx';
import './index.css'

import {

  RouterProvider,
} from "react-router-dom";
import AuthProvider from './Provider/AuthProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
 <div className="max-w-7xl mx-auto">
   <React.StrictMode>
   <AuthProvider> <RouterProvider router={router} /></AuthProvider>

  </React.StrictMode>,
 </div>
)
