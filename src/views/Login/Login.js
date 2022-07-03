import { useState } from 'react';
import {JWT_KEY} from 'consts/app';
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
            const response = await fetch('https://librarify.latteandfront.es/api/login_check', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: form.email,
                    password: form.password
                })
            });
            if (response.ok) {
                setloginSuccessful(true);
                setloginFailed(false);
                console.log("it went okay");
                const json = await response.json();
                localStorage.setItem(JWT_KEY, JSON.stringify(json.data));
            } else {
                setloginFailed(true);
                setloginSuccessful(false);
                console.log("todo mal");
                console.log(response);
            }
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
