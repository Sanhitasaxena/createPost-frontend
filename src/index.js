import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreatePost from './Components/CreatePost';
import AllPosts from './Components/AllPosts';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/create" element={<CreatePost/>}/>
      <Route path="/create/allpost" element={<AllPosts/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

