import { useState } from 'react';
import { JWT_KEY } from 'consts/app';
import apiClient from "../../utils/apiClient";
import LoginView from './LoginView'

export default function Login() {
    const [form, setForm] = useState({
        email: '',
        password: ''
    });
    const [loginSuccessful, setloginSuccessful] = useState(false);
    const [loginFailed, setloginFailed] = useState(false);

    async function handleSubmit(ev) {
        ev.preventDefault();

        try {
            setloginFailed(false);
            setloginSuccessful(true);
            const json = await apiClient.post('/login_check', {
                username: form.email,
                password: form.password
            });

            localStorage.setItem(JWT_KEY, JSON.stringify(json.data));

        } catch (error) {
            setloginFailed(true);
            setloginSuccessful(false);
            console.log(error);
        }
    }
    function handleForm(event) {
        setForm((formState) => ({
            ...formState,
            [event.target.name]: event.target.value
        }));
    }


    return (
        <LoginView
            form={form}
            onInputChanged={handleForm}
            onSubmit={handleSubmit}
            loginSuccessful={loginSuccessful}
            loginFailed={loginFailed}
        />
    );
}
