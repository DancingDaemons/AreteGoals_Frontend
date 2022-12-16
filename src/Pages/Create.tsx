import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Alert, Image, Box, Button, NumberInput, TextInput, BackgroundImage, Grid, Stack} from "@mantine/core";
import {IconAlertCircle} from "@tabler/icons";
import {useForm} from "@mantine/form";
import { useViewportSize } from '@mantine/hooks';
import mtImg from "../Images/jungleMt.png";
import axios from "axios";


export default function Create(){
    const { height, width } = useViewportSize();
    const [status, setStatus] = useState(-1);

    let navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            notify()
            setStatus(0)
        }, 3000)
    }, [status])


    function notify() {
        if (status === 200) {
            return (
                <Alert icon={<IconAlertCircle size={16}/>} title="Success" color="green">
                    Created!
                </Alert>
            )
        } else if (status >= 400) {
            return (
                <Alert icon={<IconAlertCircle size={16}/>} title="Error" color="red">
                    Malfunction
                </Alert>
            )
        }
    }

    const goalForm = useForm({
        initialValues: {
            "definedGoal": "",
            "category": "",
            "description": "",
            "quantitativeType": "",
            "metric": 0
        },
        validateInputOnChange: true,

        validate: {
            //do something
        }
    });

    type FormValues = typeof goalForm.values;

    async function handleSubmit(values: FormValues) {
        goalForm.isValid();
        goalForm.validate();

        await axios.post("http://localhost:8080/goal", {
            //"userId": userId,
            "aim": values.definedGoal,
            "category": values.category,
            "description": values.description,
            "quantitativeType": values.quantitativeType,
            "metric": values.metric
        }).then(response => {
            console.log(response)
            setStatus(response.status)
            //props.getGoals();
            goalForm.reset();
        }).catch(function (error) {
            setStatus(error.response.status)
            console.log(error)
        });
    }

    return (
        <Stack>
            <Box className="App" sx={{ width: '100%' }}>
                {notify()}
                <Box sx={{paddingLeft: "15%", width: '80%'}}>
                    <form onSubmit={goalForm.onSubmit(handleSubmit)} onReset={goalForm.onReset} >
                        <h2> Create New Goal</h2>
                        <Box>
                            <TextInput
                                withAsterisk
                                required
                                label='Define the goal'
                                {...goalForm.getInputProps('definedGoal')}
                            >
                            </TextInput>
                        </Box>
                        <Box>
                            <TextInput
                                withAsterisk
                                required
                                label='Categorization: '
                                {...goalForm.getInputProps('category')}
                            >
                            </TextInput>
                        </Box>
                        <Box>
                            <TextInput
                                withAsterisk
                                required
                                label='Description:'
                                {...goalForm.getInputProps('description')}
                            >
                            </TextInput>
                        </Box>
                        <Box>
                            <TextInput
                                withAsterisk
                                required
                                label='Quantitative Type'
                                {...goalForm.getInputProps('quantitativeType')}
                            >
                            </TextInput>
                        </Box>
                        <Box>
                            <NumberInput
                                withAsterisk
                                required
                                label='Metric'
                                {...goalForm.getInputProps('metric')}
                            >
                            </NumberInput>
                        </Box>
                        <Grid>
                            <Grid.Col span={4}>

                            </Grid.Col>
                            <Grid.Col span={2}>
                            <Button
                                variant="default"
                                color="white"
                                type={"submit"}
                            >
                                Submit
                            </Button>
                            </Grid.Col>
                            <Grid.Col span={2}>
                            <Button
                                onClick={() => {
                                goalForm.reset()
                            }}>
                                Cancel
                            </Button>
                            </Grid.Col>
                        </Grid>
                    </form>
                </Box>
            </Box>
            <Image
                src={mtImg}
            />
        </Stack>
    )
}