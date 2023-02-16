import React from "react";

const UserContext = React.createContext();

export const AuthProvider = ({children})=>{
    const [userauth, setAuth] = React.useState({});
    const [sessionID, setSessionID] = React.useState({});
   

    console.log('userAuthContext', userauth)

    return (
        <UserContext.Provider value={{ userauth, setAuth, sessionID, setSessionID}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;