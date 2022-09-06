import axios from 'axios'
import React,{Fragment, useContext, useEffect, useState} from "react";
import {AuthContext} from "../Providers/AuthProviders"
import Container from "../common/Container";
import Dishes from './Dishes';
import AddDish from "./AddDish"
import NewDishForm from "../MyRestaurant/NewDishForm"
import SignUp from '../Auth/SignUp';

// this will display all dishes and allow users to add a new dish. 


const MyRestaurant =()=>{
    return(
        <Container>
            <h1>My restaurant</h1>
            <AddDish/>
            <Dishes/>
    
        </Container>
    

    )
}
export default MyRestaurant;