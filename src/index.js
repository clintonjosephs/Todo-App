import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TodoContainer from './components/TodoContainer';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
// stylesheet
import './App.css';

ReactDOM.render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
      <Navbar />
      <Routes>
        <Route path="/" element={<TodoContainer />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
