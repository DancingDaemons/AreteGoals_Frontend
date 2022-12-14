import React from 'react';
import './App.css';
import {Routes, Route, useLocation, useNavigate} from "react-router-dom";
import {Box} from '@mantine/core';
import HomePage from "./Pages/HomePage";
import ProfilePage from "./Pages/ProfilePage";
import SettingsPage from "./Pages/SettingsPage";
import DailyPage from "./Pages/DailyPage";
import LogsPage from "./Pages/LogsPage";


function App() {
  return (
      <Box>
        <Routes>
          <Route path={"/"} element={<HomePage />}/>
          <Route path={"/profile"} element={<ProfilePage />}/>
          <Route path={"/settings"} element={<SettingsPage />}/>
          <Route path={"/aims"} element={<DailyPage />}/>
          <Route path={"/logs"} element={<LogsPage />}/>
        </Routes>
      </Box>
  );
}

export default App;
