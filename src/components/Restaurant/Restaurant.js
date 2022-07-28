import React from "react";
import Container from "../common/Container";
import Splash from "../common/Splash";
import restaurantSplash from "../../assets/restaurantSplash.jpg"

const Restaurants =()=>{
    return(
        <Container>
            <Splash image={restaurantSplash}>
            <h1 style={{ color: 'white'}}>Restaurants</h1>
            </Splash>

        </Container>
        
    )
}
export default Restaurants;