// - will get info from update dish form and send a post request to existing id 

import React,{useState, useContext} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios"
import Container from "../common/Container";
import { AuthContext } from "../Providers/AuthProviders";
// import NewDishForm from "./NewDishForm";
import { DishContext, DishProviders } from "./DishProvidors";

const UpdateDish = () => {
    const[query, setQuery]= useState({
        itemName:"",
        description:"",
        price:""
    })

    const [dish, setDish] = useContext(DishContext)
    const navigate = useNavigate();
    
    const updateForm =(field, value) =>{
        setQuery({
            ...query,
            [field]:value

        })
    }
    const [auth] =useContext(AuthContext)

    const onSubmit = async()=>{
        const data = query;
        console.log("plate data")
        console.log(data)
        try{
            const getProfile =  await axios.get(`http://localhost:8080/api/profiles/${auth.id}`)
            console.log(getProfile.data)
            console.log(getProfile.data.restaurant.id)
            console.log(getProfile)

            const restaurantId= getProfile.data.restaurant.id 
            //test

            const res = await axios.put(`http://localhost:8080/api/menuitems/restaurant/${restaurantId}`,data)

            console.log(res.data)

            //This will clear out add new dish fields.
            setQuery({itemName: '',description: '', price: ''})
            
        }catch(error){
            console.error(error.response? error.response.data: error.message)
        }
        
    }
    return(
        <Container>
            <updateForm onSubmit={onSubmit} query={query} updateForm={updateForm}/>
        </Container>
    )

}
export default UpdateDish;