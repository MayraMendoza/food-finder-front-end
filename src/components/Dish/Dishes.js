import React from "react";
import Container from "../common/Container";
import Splash from "../common/Splash";
import dishSplash from "../../assets/dishSplash.jpg"
import BorderCard from '../common/BorderCard'

// will use this to add dishes / display dishes {owner}

const Dishes =()=>{
    return(
        <Container>
            
            <Splash image={dishSplash}>
            <BorderCard>
                <h1>TEST</h1>
            </BorderCard>

            </Splash>
        </Container>
    )
}
export default Dishes;