import React from 'react'
import{useState} from 'react'
import Container from '../common/Container'
import Form from '../common/Form'
import InlineInputContainer from '../common/InlineInputContainer'
import Input from '../common/Input'
import Button from '../common/Button'

/**
 * This form will take input from users that want to create a new account. 
 */


const SignUpForm= ({onSubmit, query, updateForm}) =>{


    // this section will check if the user has checked a box indicating if they are an owner or not. 
    const[isChecked, setIsChecked] = useState(false);
    const handleChangeIsOwner =()=>{

        // console.log(isOwner)\
        const checkedBox = document.getElementById("isOwner")

        if(checkedBox.checked){
            updateForm("isOwner", true)
        }else{
            updateForm("isOwner", false)

        }

        // setIsChecked(current => !current)
        
    }



   
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
                    id = "password"
                    placeholder = "Password"
                    value= {query.password}
                    onChange = {handleChange}
                    required
                    type="password"
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
                    // defaultChecked = {false}
                    // checked = {isChecked}
                    value = {query.isOwner}
                    onChange = {handleChangeIsOwner}
                    // onChange = {handleChange}
                    
                    />
                <Button>Submit</Button>
                

            </Form>
        </Container>
    )

}
export default SignUpForm;