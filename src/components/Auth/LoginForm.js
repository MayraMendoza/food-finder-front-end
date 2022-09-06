import React from 'react'
import Container from '../common/Container';
import Form from '../common/Form'
import InlineInputContainer from '../common/InlineInputContainer'
import Input from '../common/Input'
import Button from '../common/Button'
import { useNavigate } from 'react-router-dom';

/* This form will take in input from log in page to get a person profile. in this page we also have a naviate call 
that will lead users to a sign up page where they can sign up and create a new account.
*/

const LoginForm = (props) =>{
    const handleChange =(e) =>{
        props.updateForm(e.target.id, e.target.value)

        // this whole function is the same as this 
        //onChange={(e)=> props.updateForm(e.target.id, e.target.value)}
        // being converted to this----->onChange={handleChange}
    }
    const navigate = useNavigate();
    const handleSignUpButton =(e) =>{
        navigate('/SignUp') 
    }
    return(
        <Container>
            <Form onSubmit ={props.onSubmit} style={{marginTop: '10em'}}>
                <InlineInputContainer>
                    <Input
                    name="id"
                    id = "id"
                    placeholder ="User Id"
                    value= {props.query.id}
                    onChange={handleChange}
                    required 
                    
                    />
                </InlineInputContainer>
                <InlineInputContainer>
                    <Input
                    name ="password"
                    id="password"
                    placeholder="password"
                    value={props.query.password}
                    onChange={handleChange}
                    required
                    type="password"
                    />
                </InlineInputContainer>
                <Button>Submit</Button>


            </Form>
            <Form onSubmit={handleSignUpButton}>
                <Button>sign up</Button>
            </Form>
        </Container>
    )

}

export default LoginForm;