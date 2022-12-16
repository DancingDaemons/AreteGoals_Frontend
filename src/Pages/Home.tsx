import * as React from "react";
import {
    Box,
    Grid,
    Image
} from "@mantine/core";
import {
    TextInput,
    PasswordInput,
    Checkbox,
    Anchor,
    Paper,
    Title,
    Text,
    Container,
    Group,
    Button,
} from '@mantine/core';
import mtImg from "../Images/green_mountain.png";
import {NavLink, useNavigate} from "react-router-dom";
import axios from "axios";

export default function Home() {

    let navigate = useNavigate();

    return (
        <Grid>
            <Grid.Col span={6}>
                <Image
                    height= "100vh"
                    src= {mtImg}
                    radius="sm"
                />
            </Grid.Col>
            <Grid.Col span={6}>
                <Container size={420} my={40}>
                    <Title
                    align="center"
                    sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
                    >
                    Welcome back!
                    </Title>
                        <Text color="dimmed" size="sm" align="center" mt={5}>
                        Do not have an account yet?{' '}
                            <Anchor<'a'> href="#" size="sm" onClick={(event) => event.preventDefault()}>
                            Create account
                            </Anchor>
                        </Text>

                    <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                        <TextInput label="Email" placeholder="you@mantine.dev" required />
                        <PasswordInput label="Password" placeholder="Your password" required mt="md" />
                        <Group position="apart" mt="lg">
                        <Checkbox label="Remember me" sx={{ lineHeight: 1 }} />
                            <Anchor<'a'> onClick={(event) => event.preventDefault()} href="#" size="sm">
                            Forgot password?
                            </Anchor>
                        </Group>
                        <Button fullWidth mt="xl">
                        Sign in
                        </Button>
                    </Paper>
                </Container>
            </Grid.Col>
        </Grid>
    );
}
