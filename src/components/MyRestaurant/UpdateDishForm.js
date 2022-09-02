import Container from '../common/Container'
import Form from '../common/Form'
import InlineInputContainer from '../common/InlineInputContainer'
import Input from '../common/Input'
import Button from '../common/Button'

const UpdateDishForm = (props) => {
    const handleChange =(e) =>{
        props.updateForm(e.target.id, e.target.value)
    }
    return(
        <Container>
            <Form onSubmit = {props.onSubmit} style={{marginTop: '2em'}}>
                <InlineInputContainer>
                    <Input
                    name = "itemName"
                    id = "itemName"
                    placeholder = "itemName"
                    value ={props.query.itemName}
                    onChange ={handleChange}
                    required
                    />
                </InlineInputContainer>
                <InlineInputContainer>
                    <Input
                    name = "description"
                    id = "description"
                    placeholder = "description:"
                    value ={props.query.description}
                    onChange ={handleChange}
                    required
                    />
                </InlineInputContainer>
                <InlineInputContainer>
                    <Input
                    name = "price"
                    id = "price"
                    placeholder = "price"
                    value ={props.query.price}
                    onChange ={handleChange}
                    required
                    />
                </InlineInputContainer>
                <Button>Submit</Button>
               
            
            

            </Form>

        </Container>
    )

}
export default UpdateDishForm;