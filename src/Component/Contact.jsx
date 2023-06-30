import { Fragment } from "react"

const Contact = (props)=>{

    const onClickHandler =()=>{
        props.onClick(props.contact.id);
    }
    const onSelectHandler = ()=>{
        props.onSelect(props.contact)
    }

    return(
        <div className="row p-md-2 mb-2" onClick={onSelectHandler}
        style={{borderRadius:"20px", border:"2px solid #555"}}>
        
            <div className="col-2 col-md-1 pt-2 pt-md-1">
                <img src={`https://ui-avatars.com/api/?name=${props.contact.name}`}
                style={{width:"80%"}}
                alt=""/>
            </div>
            <div className="col-6 col-md-5 text-warning pt-0">
                <span className="h4">{props.contact.name}</span>
            </div>
            <br/>
            <div className="text-white-50">
                {props.contact.email}
                <br/>
                {props.contact.phone}
            </div>
            <div className="col-2 col-md-2 pt-md-3">
                <button onClick={onClickHandler} className={`btn btn-sm m-1 ${
                    props.contact.isFavorite? "btn-warning":"btn-outline-warning"}`}>
                        <i className="bi bi-star" style={{fontSize:"1rem"}}></i>
                </button>
            </div>
        </div>
    )
}
export default Contact