import { Fragment } from "react"
import Contact from "./Contact"

const FavoriteContacts = (props)=>{

    return(
        <Fragment>
            {props.contacts.map((item,index) =>(
                <Contact key={index} contact={item}/>
            ))}
        </Fragment>
    )
}
export default FavoriteContacts