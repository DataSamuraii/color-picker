import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {store} from "./store/store";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import WelcomePage from "./welcomePage/welcomePage";

export let rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route path='/'
                           element={<WelcomePage state={store.state}/>}
                    />
                    <Route path='color-picker'
                           element={<App state={store.state}
                                         onChange={store.onChange.bind(store)}
                                         onSubmit={store.onSubmit.bind(store)}/>}
                    />
                </Routes>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderEntireTree();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
