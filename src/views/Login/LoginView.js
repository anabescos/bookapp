
export default function LoginView ({ form, onInputChanged, onSubmit, loginSuccessful, loginFailed }) {
    return (
        <div>
            <form className="form" onSubmit={onSubmit}>
                <div className="form__email">
                    <label className="form__email-label">Email</label>

                    <input
                        className="form__email-input"

                        name={form.email}
                        onChange={onInputChanged}
                    />
                </div>
                <div className="form__password">
                    <label className="form__password-label">Contraseña</label>

                    <input
                        className="form__password-input"
                        name={form.password}
                        onChange={onInputChanged}
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