import React from 'react';
import './App.css';
import {Routes, Route, useLocation, useNavigate} from "react-router-dom";
import {Box} from '@mantine/core';
//import {useAuth0} from "@auth0/auth0-react";
import {Navigation} from "./Components/Navigation";
import HomePage from "./Pages/HomePage";
import ProfilePage from "./Pages/ProfilePage";
import SettingsPage from "./Pages/SettingsPage";
import DailyPage from "./Pages/DailyPage";
import LogsPage from "./Pages/LogsPage";
import Create from "./Pages/Create";


export default function App (){
    // const {isAuthenticated} = useAuth0();


    return (
      <Box>
            <Navigation/>
            <Routes>
                  <Route path={"/"} element={<HomePage />}/>
                  <Route path={"/profile"} element={<ProfilePage />}/>
                  <Route path={"/create"} element={<Create />}/>
                  <Route path={"/settings"} element={<SettingsPage />}/>
                  <Route path={"/aims"} element={<DailyPage />}/>
                  <Route path={"/logs"} element={<LogsPage />}/>
            </Routes>
      </Box>
  );
}
