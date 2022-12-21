import React, { createContext } from 'react';

export const AuthContext = createContext();

function AuthContextProvider() {
    return (
        <AuthContext.Provider value={}>

        </AuthContext.Provider>
    )
}

export default AuthContextProvider;
