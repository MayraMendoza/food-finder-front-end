import axios from 'axios'
import React, { useState, useEffect } from "react";


const Test =() =>{
    const [restaurants, setRestaurants] = useState({});
    useEffect(()=>{
        const getRestaurants = async() => {
            const res = await axios.get("http://localhost:8080/api/restaurants/");
            console.log(res.data);
        }
        getRestaurants();

    },[])
    return(
        <h1>Test</h1>

    )
}

export default Test;