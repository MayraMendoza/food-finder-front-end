import React from "react";
import Container from "../common/Container";
import Form from "../common/Form";
import InlineInputContainer from "../common/InlineInputContainer";
import Input from "../common/Input";
import Button from "../common/Button";

/**
 * this form will be used to add a new restaurant to a user
 * who has declared they are a restaurant owner. 
 */ 

const NewRestaurantForm =(props)=>{
    const handleChange=(e) =>{
        props.updateForm(e.target.id, e.target.value)
    }

    return(
        <Container>
            <Form onSubmit ={props.onSubmit} style ={{marginTop: '2em'}}>
                <InlineInputContainer>
                    <input
                    name
                    />
                    
                </InlineInputContainer>

            </Form>
        </Container>
    )

}