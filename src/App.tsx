import React from 'react';
import './App.css';
import {Routes, Route, useLocation, useNavigate} from "react-router-dom";
import {Box} from '@mantine/core';
import {Navigation} from "./Components/Navigation";
import Home from "./Pages/Home";
import ProfilePage from "./Pages/ProfilePage";
import SettingsPage from "./Pages/SettingsPage";
import Hercules from "./Pages/Hercules";
import Goals from "./Pages/Goals";
import Create from "./Pages/Create";
//import {useAuth0} from "@auth0/auth0-react";


export default function App (){
    // const {isAuthenticated} = useAuth0();


    return (
      <Box>
            <Navigation/>
            <Routes>
                <Route path={"/"} element={<Home />}/>
                <Route path={"/create"} element={<Create />}/>
                <Route path={"/goals"} element={<Goals />}/>
                <Route path={"/hercules"} element={<Hercules />}/>
                <Route path={"/profile"} element={<ProfilePage />}/>
                <Route path={"/settings"} element={<SettingsPage />}/>
            </Routes>
      </Box>
  );
}
