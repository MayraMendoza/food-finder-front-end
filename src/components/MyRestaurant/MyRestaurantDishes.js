import axios from "axios"
import React from "react";
import NewDishForm from "./NewDishForm";
import BoardCard from "../common/BorderCard"
// this will hold all dishes that are connected to restaurant/ owner

const MyRestaurantDishes =(props) =>{
    return(
        <BoardCard>
            <h1>{props.MyRestaurantDishes.itemName}</h1>
            <h1>{props.MyRestaurantDishes.description}</h1>
            <h1>{props.MyRestaurantDishes.price}</h1>

        </BoardCard>
       
    )
}
export default MyRestaurantDishes;