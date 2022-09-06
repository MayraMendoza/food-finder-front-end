import axios from "axios"
import React, {useState, useEffect, useContext} from "react";
import { DishContext} from "./DishProvidors"
import Container from "../common/Container";
import MyRestaurantDishes from "./MyRestaurantDishes";
import { AuthContext } from "../Providers/AuthProviders";

/* this document will be used to display all dishes in a specific restaurant 
(this can only be accessed by the restaurants owner). This will use My restaurant dishes to format how dishes will be displayed)
*/

const Dishes=()=>{
    const[ dish, setDish]= useState([]);
    const [loading, setLoading]= useState(true);
    const [Dish] = useContext(DishContext)
    const [auth] =useContext(AuthContext)

    // GET: get and display all dishes. 

    useEffect(()=>{
        const getDish = async() =>{
            try{


            const getProfile =  await axios.get(`http://localhost:8080/api/profiles/${auth.id}`)
            console.log(getProfile.data)
            console.log(getProfile.data.restaurant.id)
            console.log(getProfile)

            const restaurantId= getProfile.data.restaurant.id 
            console.log("hello");
            console.log(restaurantId);
            //test

            const dishRes = await axios.get(`http://localhost:8080/api/menuitems/Restaurant/${restaurantId}`)
            
            setDish(dishRes.data)
            console.log(dishRes.data)
            setLoading(false)

            

            // //This will clear out add new dish fields.
            // // setQuery({itemName: '',description: '', price: ''})
            

                // const dishRes = await axios.get(`http://localhost:8080/api/menuitems/Restaurant/3`)

                // setDish(dishRes.data)
                // console.log(dishRes.data)
                // setLoading(false)

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
export default Dishes;