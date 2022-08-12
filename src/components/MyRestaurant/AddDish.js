import React,{useState, useContext} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios"
import Container from "../common/Container";
import NewDishForm from "./NewDishForm";
import { DishContext, DishProviders } from "./DishProvidors";

const AddDish = () => {
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
    const onSubmit = async()=>{
        const data = query;
        console.log(data)
        try{
            //test
            const res = await axios.post(`http://localhost:8080/api/menuitems/restaurant/3`,data)
            
        }catch(error){
            console.error(error.response? error.response.data: error.message)
        }
        
    }
    return(
        <Container>
            <NewDishForm onSubmit={onSubmit} query={query} updateForm={updateForm}/>
        </Container>
    )

}
export default AddDish;