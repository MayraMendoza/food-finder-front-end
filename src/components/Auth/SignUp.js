import React,{useState, useContext} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Container from "../common/Container";
import SignUpForm from "./SignUpForm";
import { AuthContext } from "../Providers/AuthProviders";


const SignUp =()=>{
    const[query, setQuery]= useState({
        firstName:"",
        lastName:"",
        userName:"",
        password:"",
        favoriteFood:"",
        isOwner: false ,

    })
    const[auth, setAuth]= useContext(AuthContext)

    const updateForm =(field,value) =>{
        setQuery({
            ...query,
            [field]:value
        })
    }

    const onSubmit = async()=>{
        const data = query;
        
        console.log(data)
        try{
            const res = await axios.get(`http://localhost:8080/api/profiles/${query.id}`)
            alert(`Hello ${res.data.firstName}`);
            alert(`Hello ${res.data.lastName}`);
    
            setAuth({id: res.data.id, name: res.data.name, owner:res.data.owner})
            // move user to home directory
            
        }
        catch (error){
        
            console.error(error.response? error.response.data: error.message)
        }
    }
    return(
        <Container>
            <SignUpForm onSubmit={onSubmit} query={onSubmit} updateForm={updateForm}/>
        

        </Container>
    
        
    )
}
export default SignUp;
