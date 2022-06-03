export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleEmail() {
        setEmail(event.target.value);
    }
    function handlePassword() {
        setPassword(event.target.value);
    }

    return (
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <div className="form__email">
                    <label className="form__email-label">Email</label>

                    <input
                        className="form__email-input"
                        value={email}
                        onChange={handleEmail}
                    />
                </div>
                <div className="form__password">
                    <label className="form__password-label">Contraseña</label>

                    <input
                        className="form__password-input"
                        value={password}
                        onChange={handlePassword}
                        type="password"
                    />
                </div>
                <div>
                    <button className="form__submit" type="submit">
                        Enviar
                    </button>
                </div>
                <div>
                    <div className="form__fail-message">Oops! Login failed</div>

                    <div className="form__success-message">Login successful!</div>
                </div>
            </form>
        </div>
    );
}
