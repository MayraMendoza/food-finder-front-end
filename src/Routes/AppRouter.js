import React from "react";
import {Routes,Route} from 'react-router-dom'
import Container from "../components/common/Container";
import Dishes from "../components/Dish/Dishes";
import Restaurants from "../components/Restaurant/Restaurant";
import Home from "../components/Home/Home";
import Self from "../components/Profile/Self";
import Login from "../components/Auth/Login";
import Navbar from "../components/Navbar/Navbar";
import Test from "../components/Test/Test";
import MyRestaurant from "../components/MyRestaurant/MyRestaurant"

const AppRouter =() =>{

    // Home screen 
    // Login 
    // My page 
    // Restaurants 
    // Dish 
    return(
        <Container>
            <Navbar/>
            <Routes>
                <Route path ="/" element={<Home/>}/>
                <Route path ="/Login" element={<Login/>}/>
                <Route path = "/profile" element = {<Self/>}/>
                <Route path="/restaurants" element={<Restaurants/>}/>
                <Route path="/dishes" element={<Dishes/>}/>
                <Route path="/test" element={<Test/>}/>
                <Route path ="/MyRestaurant" element={<MyRestaurant/>}/>
                

            </Routes>

        </Container>
        
    )
}
export default AppRouter;