import React,{useState} from "react";

const DishContext = React.createContext([{},() =>{}])

const DishProviders = (props) => {
    const [dish, setDish] = useState({id:null, itemName:"", description:"", price:"" })
    return(
        <DishContext value={[dish,setDish]}>
            {props.children}

        </DishContext>
    )
}
export {DishContext, DishProviders}