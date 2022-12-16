import React, {useEffect, useState} from "react";
import axios from "axios";
import {Alert, Button, Box, Grid, TextInput, NumberInput} from "@mantine/core";
import {IconAlertCircle} from '@tabler/icons';
import { useForm} from '@mantine/form';
import {useNavigate} from "react-router-dom";


export default function CreateGoal() {
    const [status, setStatus] = useState(0);

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
            "definedGoal": values.definedGoal,
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
        <Box className="App" sx={{ width: '80%' }}>
            {notify()}
            <form onSubmit={goalForm.onSubmit(handleSubmit)} onReset={goalForm.onReset}>
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
            <Box>
                <Button variant="default" color="white" type={"submit"} >Submit</Button>
                <Button onClick={() => {
                        goalForm.reset()
                    }}> Cancel
                </Button>
            </Box>
            </form>
        </Box>
    )
}