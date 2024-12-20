import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";

createRoot(document.getElementById('root')).render(
    //브라우저의 현재 주소를 저장하고 변경을 감지하는 역할 <BrowserRouter>
    <BrowserRouter>
        <App />
    </BrowserRouter>
)
