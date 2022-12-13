import React, {useEffect, useState} from "react";
import ListAims from "../Components/ListAims";
import Detailed from "../Components/Detailed";
import mtImg from "../Images/jungleMt.png";
import CreateGoal from "../Components/CreateGoal";
import {useNavigate} from "react-router-dom";
import {Box, Grid} from "@mantine/core";

export default function AimDayPage(props){
    const [update, setUpdate] = useState(false);
    const [value, setValue] = React.useState('1');
    let navigate = useNavigate();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(()=>{
        if(props.userId <= 0) {
            navigate('/')
        }
    },[])

    const styles = {
        paperContainer: {
            flexGrow: 1,
            backgroundImage: `url(${mtImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            padding: 5,
            height:'100vh'
        }
    };

        return (
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="Goals" value="1" />
                            <Tab label="Create" value="2" />
                            <Tab label="Detailed" value="3" />
                        </TabList>
                    </Box>

                    <TabPanel value="1">
                        <Stack spacing={2}>
                            {/*<Box display={"flex"} justifyContent="center">*/}
                            {/*    <h2 >  </h2>*/}
                            {/*</Box>*/}
                            <ListAims
                                goals = {props.goals}
                            />
                        </Stack>
                    </TabPanel>

                    <TabPanel value="2">
                        <CreateGoal
                            userId ={props.userId}
                            theme={props.theme}
                            setUpdate={setUpdate}
                            update={update}
                            getGoals = {props.getGoals}
                        />
                    </TabPanel>

                    <TabPanel value="3">
                        <Box sx={{
                            margin: "10%"
                        }}>

                            <Detailed
                                goals = {props.goals}
                                setValue ={setValue}
                                getGoals = {props.getGoals}
                            />
                        </Box>
                    </TabPanel>

                </TabContext>
            </Box>
        );
    }



