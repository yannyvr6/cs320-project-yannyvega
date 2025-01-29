import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App';
import Page2 from "./Components/Page2";
import {BrowserRouter , Routes , Route} from "react-router-dom";
import Navbar from "./Components/Navbar";
import { Amplify } from "aws-amplify";
import config from './amplifyconfiguration.json';

Amplify.configure(config)
//import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/Page2" element={<Page2/>}/>
                {/* You can add more pages by adding more rout elements here!*/}
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
