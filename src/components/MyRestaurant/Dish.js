import axios from "axios"
import React, {useState, useEffect, useContext} from "react";
import Container from "../common/Container";
import MyRestaurantDishes from "./MyRestaurantDishes";

const Dish=()=>{
    const[ Dish, setDish]= useState([]);
    const [loading, setLoading]= useState(true);

    useEffect(()=>{
        const getDish = async() =>{
            try{
                const dishRes = await axios.get(`http://localhost:8080/api/menuitems/Restaurant/3`)
                console.log(dishRes)

            }catch (error){
                console.error(error.response? error.response.data: error.message)
            }
        }
        getDish();
    },[])
    const displayDishes =()=>{
        return Dish.map(MyRestaurantDishes =>{
            return(<MyRestaurantDishes MyRestaurantDishes ={MyRestaurantDishes}/>)
        })
    }
    return(
        <Container>
            <h1>Dish</h1>
            {loading?(<p>Loading...</p>):
            displayDishes()
        }
        </Container>
    )
}
export default Dish;