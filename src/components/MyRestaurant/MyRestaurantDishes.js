import axios from "axios"
import React from "react";
import NewDishForm from "./NewDishForm";
import BorderCard from "../common/BorderCard"
import Container from "../common/Container";
import Button from "../common/Button";

// this will hold all dishes that are connected to restaurant/ owner

const MyRestaurantDishes =(props) =>{
    return(
        <BorderCard>
            <h1> {props.MenuItem.itemName} </h1>
            <p> description: {props.MenuItem.description}</p>
            <p>price: {props.MenuItem.price}</p>
            <Button style ={{backgroundColor: 'orange'}}> Edit
                
            </Button>

        </BorderCard>
        


        
        
       
    )
}
export default MyRestaurantDishes;