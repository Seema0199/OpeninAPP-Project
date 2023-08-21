import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Toaster} from "react-hot-toast" 
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <>
 <GoogleOAuthProvider clientId='137759740699-jn787mt9ojf28mfdqianbesieqjsijjm.apps.googleusercontent.com' >
 <App />
 <Toaster/>
 </GoogleOAuthProvider>
 </>
  
);


