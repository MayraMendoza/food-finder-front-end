import React from "react";
import Container from "../common/Container";
import Splash from "../common/Splash";
import HomeS from "../../assets/HomeS.jpg"
import SignUp from "../Auth/SignUp";


const Home =() =>{
    return(
        <Container>

            <Splash image={HomeS}>
                <h1>Hello</h1>
                {/* <SignUp></SignUp> */}

                
        
            </Splash>

        </Container>
        

    )
}

export default Home;