import axios from 'axios'
import React,{Fragment, useContext, useEffect, useState} from "react";
import {AuthContext} from "../Providers/AuthProviders"
import Container from "../common/Container";
import MyRestaurantDishes from "../MyRestaurant/MyRestaurantDishes"



const MyRestaurant =()=>{
    return(
        <Container>
            <h1>My restaurant</h1>
            <MyRestaurantDishes/>
            <MyRestaurantDishes/>

        </Container>

    )
}
export default MyRestaurant;