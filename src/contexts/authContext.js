import { createContext, useContext, useCallback, useMemo, useState } from "react";
const MY_AUTH_BOOKAPP = 'MY_AUTH_BOOKAPP';

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
    const authTokensInLocalStorage = localStorage.getItem(MY_AUTH_BOOKAPP);

    const [authTokens, setAuthTokens] = useState(authTokensInLocalStorage === null ? null : JSON.parse(authTokensInLocalStorage) );

    const login = useCallback(function (authTokens) {
        localStorage.setItem(MY_AUTH_BOOKAPP, JSON.stringify(authTokens));
        setAuthTokens(authTokens);
    }, []);

    const logout = useCallback(function () {
        localStorage.removeItem(MY_AUTH_BOOKAPP);
        setAuthTokens(null);
    }, []);

    const value = useMemo(() => ({
        login,
        logout,
        authTokens,
        isAuthenticated: authTokens != null
    }), [login, logout, authTokens]);

    return <AuthContext.Provider value={value}>        {children}
    </AuthContext.Provider>
}
export function useAuthContext() {
    return useContext(AuthContext);
}