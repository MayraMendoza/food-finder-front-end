import axios from "axios"
import React from "react";
import NewDishForm from "./NewDishForm";
import BorderCard from "../common/BorderCard"
import Container from "../common/Container";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";

// this will hold all dishes that are connected to restaurant/ owner

const MyRestaurantDishes =(props) =>{

    const navigate = useNavigate();
    
    const onClick=()=>{
        alert("hi");
        const dishId = props.MenuItem.id
        alert(dishId)
        // navigate("/updateDish");

    }
    return(
        <BorderCard >
            <h1> {props.MenuItem.itemName} </h1>
            <p> description: {props.MenuItem.description}</p>
            <p>price: {props.MenuItem.price}</p>
            <Button style ={{backgroundColor: 'orange'}} onClick={onClick}> Edit
                
            </Button>

        </BorderCard>
        
       
    )
}
export default MyRestaurantDishes;
