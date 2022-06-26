import { useState } from 'react';

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
            } else {
                setloginFailed(true);
                setloginSuccessful(false);
            }
        } catch (error) {
            setloginFailed(true);
            setloginSuccessful(false);
        }
    }
    function handleForm(event) {
        setForm((formState) => ({
            ...formState,
            [event.target.name]: event.target.value
        }));
    }


    return (
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <div className="form__email">
                    <label className="form__email-label">Email</label>

                    <input
                        className="form__email-input"

                        name={form.email}
                        onChange={handleForm}
                    />
                </div>
                <div className="form__password">
                    <label className="form__password-label">Contraseña</label>

                    <input
                        className="form__password-input"
                        name={form.password}
                        onChange={handleForm}
                        type="password"
                    />
                </div>
                <div>
                    <button className="form__submit" type="submit">
                        Enviar
                    </button>
                </div>
                <div>
                    {loginFailed && (
                        <div className="form__fail-message">Oops! Login failed</div>
                    )}
                    {loginSuccessful && (
                        <div className="form__success-message">Login successful!</div>
                    )}
                </div>
            </form>
        </div>
    );
}
