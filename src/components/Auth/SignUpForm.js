import React from 'react'
import{useState} from 'react'
import Container from '../common/Container'
import Form from '../common/Form'
import InlineInputContainer from '../common/InlineInputContainer'
import Input from '../common/Input'
import Button from '../common/Button'
// import { Input, Button, checkbox } from "react-advanced-form-addons";

{/*
This Form will be used to taking a person information to create a new profile
it will have a spot where it asks if the user is an owner = when its clicked it will set that field to true...
*/}




const signUpForm= ({onSubmit, query, updateForm}) =>{
    // const[isOwner, setIsOwner] = useState("true");
    // state ={isOwner:false};
    // const [isSubscribed, setIsSubscribed] = useState(true);
    const handleChange =(e) =>{
        updateForm(e.target.id, e.target.value)


    }
    return(
        <Container>
            <Form onSubmit ={onSubmit} style={{margintOP: '10em'}}>
                <InlineInputContainer>
                    <Input
                    name="firstName"
                    id = "firstName"
                    placeholder = "First Name"
                    value= {query.firstName}
                    onChange = {handleChange}
                    required
                    />
                </InlineInputContainer>
                <InlineInputContainer>
                    <Input
                    name="lastName"
                    id = "lastName"
                    placeholder = "Last Name"
                    value= {query.lasttName}
                    onChange = {handleChange}
                    required
                    />
                </InlineInputContainer>
                <InlineInputContainer>
                    <Input
                    name="userName"
                    id = "userName"
                    placeholder = "User Name"
                    value= {query.userName}
                    onChange = {handleChange}
                    required
                    />
                </InlineInputContainer>
                <InlineInputContainer>
                    <Input
                    name="password"
                    id = "passWord"
                    placeholder = "Password"
                    value= {query.password}
                    onChange = {handleChange}
                    required
                    />
                </InlineInputContainer>
                <InlineInputContainer>
                    <Input
                    name="favoriteFood"
                    id = "favoriteFood"
                    placeholder = "Favorite Food "
                    value= {query.favoriteFood}
                    onChange = {handleChange}
                    required
                    />
                </InlineInputContainer>
                <p>Are you a restaurant owner?</p>
                <Input
                
                    name="isOwner"
                    type = "checkbox"
                    id = "isOwner"
                    label= "Are you a restaurant owner?"
                    defaultChecked = {false}
                    value = {query.isOwner}
                    // Checked= {}
                    onChange = {handleChange}
                    
                    />
                <Button>Submit</Button>
                

            </Form>
        </Container>
    )

}
export default signUpForm;