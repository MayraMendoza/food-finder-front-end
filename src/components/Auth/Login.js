import React from "react";
import Container from "../common/Container";
import Splash from "../common/Splash";
import loginSplash from "../../assets/loginSplash.jpg"

const Login =()=>{
    return(
        <Container>
            <Splash image = {loginSplash}>
            <h1 style={{ color: 'white' }}>Login</h1>

            </Splash>
        </Container>
        
    )
}
export default Login;