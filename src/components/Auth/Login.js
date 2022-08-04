import React,{useState, useContext}from "react";
import {useNavigate} from 'react-router-dom'
import axios from "axios";
import Container from "../common/Container";
import Splash from "../common/Splash";
import loginSplash from "../../assets/loginSplash.jpg"
import LoginForm from "./LoginForm";
import {AuthContext} from '../Providers/AuthProviders'

const Login =()=>{
    const[query, setQuery]= useState({
        id:"",
        password:"",

    })

    const [auth, setAuth]= useContext(AuthContext)
    const navigate = useNavigate();
    console.log(auth);

    const updateForm = (field, value)=>{
        
        setQuery({
            ...query,
            [field]: value
        })

    }
    const onSubmit = async()=>{
        const data = query;
        try{
            const res = await axios.get(`http://localhost:8080/api/profiles/${query.id}`)
            alert(`Hello ${res.data.name}`);
            setAuth({id: res.data.id, name: res.data.name})
            // move user to home directory
            navigate('/')
        }catch (error){
        
            console.error(error.response? error.response.data: error.message)
        }

    }
    return(
        <Container>
            <Splash image = {loginSplash}>
            <h1 style={{ color: 'white'}}>Login</h1>
            <Container>
            <LoginForm onSubmit ={onSubmit} query ={query} updateForm={updateForm}/>
            </Container>

            </Splash>
            {/* <LoginForm onSubmit ={onSubmit} query ={query} updateForm={updateForm}/> */}
        </Container>
    
        
    )
}
export default Login;