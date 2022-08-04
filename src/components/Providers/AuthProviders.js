import React, {useState} from "react";

//will take an object and a fucntion 
const AuthContext = React.createContext([{}, () => {}])

const AuthProviders =(props)=> {

    const[auth, setAuth] =useState({id: null, name:""});
    return(
        <AuthContext.Provider value={[auth,setAuth]}>
            {props.children}

        </AuthContext.Provider>
    )
}
export {AuthContext, AuthProviders};