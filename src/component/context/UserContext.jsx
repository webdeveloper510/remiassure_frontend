import React, {useState} from "react";

const UserContext = React.createContext();

export const AuthProvider = ({children})=>{
    const [location, setLocation] = useState('');
    const [sessionID, setSessionID] = React.useState({});
   

    console.log('userAuthContext', location)

    return (
        <UserContext.Provider value={{ location, setLocation, sessionID, setSessionID}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;