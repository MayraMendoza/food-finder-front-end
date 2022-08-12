import axios from 'axios'
import React,{Fragment, useContext, useEffect, useState} from "react";
import {AuthContext} from "../Providers/AuthProviders"
import Container from "../common/Container";
import MyRestaurantDishes from "../MyRestaurant/MyRestaurantDishes"
import AddDish from "./AddDish"
import NewDishForm from "../MyRestaurant/NewDishForm"
// this will display all dishes and allow users to add dishes. 



const MyRestaurant =()=>{
    return(
        <Container>
            <h1>My restaurant</h1>
            <AddDish/>
            {/* <MyRestaurantDishes/> */}

        </Container>

    )
}
export default MyRestaurant;