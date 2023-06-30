import { Fragment } from "react"
import Contact from "./Contact"

const GeneralContacts = (props)=>{

    return(
        <Fragment>
            {props.contacts.map((item,index) =>(
                <Contact key={index} contact={item}
                onClick={props.onClick}
                onSelect={props.onSelect}
                />
            ))}
        </Fragment>
    )
}
export default GeneralContacts