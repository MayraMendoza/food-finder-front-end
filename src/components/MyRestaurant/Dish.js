import axios from "axios"
import React, {useState, useEffect, useContext} from "react";
import { DishContext} from "../MyRestaurant/DishProvidors"
import Container from "../common/Container";
import MyRestaurantDishes from "./MyRestaurantDishes";

const Dish=()=>{
    const[ dish, setDish]= useState([]);
    const [loading, setLoading]= useState(true);
    const [Dish] = useContext(DishContext)

    // GET: get and display all dishes. 

    useEffect(()=>{
        const getDish = async() =>{
            try{
                const dishRes = await axios.get(`http://localhost:8080/api/menuitems/Restaurant/3`)

                setDish(dishRes.data)
                console.log(dishRes.data)
                setLoading(false)

            }catch (error){
                console.error(error.response? error.response.data: error.message)
            }
        }
        getDish();
    },[])
    const displayDishes =() =>{
        

        
        return dish.map( MenuItem => {
            return(
            <MyRestaurantDishes MenuItem = {MenuItem}/>
            )
        })
    
    }
    return(
        <Container >
            <h1>My Dishes</h1>
            {loading?(<p>Loading...</p>):
            (
                <div id= "flex" fontSize="10" >
                    {displayDishes()}

                </div>
            )
            
        }
        </Container>
    )
}
export default Dish;