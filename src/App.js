import React from 'react';
import './App.css';

import Sidebar from './components/sidebar';
import MainPage from './pages/Main/MainPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // 추가

function App() {
  return (
    <Router>
      <div>
          {<Sidebar/>}
        <Routes>
            {/* 메인 페이지 */}
          <Route path="/" element={<MainPage />} />





        </Routes>
      </div>
    </Router>
  );
}

export default App;