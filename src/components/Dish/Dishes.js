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
                //TESTING FLEX 
            <div id="flex">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">4</div>
  <div class="item">4</div>
  <div class="item">4</div>
  <div class="item">4</div>
  <div class="item">4</div>
  <div class="item">4</div>
  <div class="item">4</div>
   <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">4</div>
  <div class="item">4</div>
  <div class="item">4</div>
  <div class="item">4</div>
  <div class="item">4</div>
  <div class="item">4</div>
  <div class="item">4</div>
  
</div>
            <BorderCard>
         
                <h1>TEST</h1>
            </BorderCard>

            </Splash>
        </Container>
    )
}
export default Dishes;