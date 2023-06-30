import { useRef, useState } from "react"

const AddContact = (props)=>{
    const[nameInput,setNameInput] = useState('');
    const[emailInput,setEmailInput] = useState('');
    const[phoneInput,setPhoneInput] = useState('');
    const [validForm,setValidForm] = useState(true);

    const name = useRef();
    const email = useRef();
    const phoneNumber = useRef();

    const [errors , setErrors] =useState({errorMessage:undefined ,successMessage:undefined})

    const onSubmitHandler = (event)=>{
        event.preventDefault();
        setValidForm(false);
        setNameInput(name.current.value);
        setEmailInput(email.current.value);
        setPhoneInput(phoneNumber.current.value);
        
        setValidForm(true);
        const returnedValue = props.onClickHandler({
            id:5,
            name:nameInput,
            email:emailInput,
            phone:phoneInput,
            isFavorite:false
        })
        setErrors(returnedValue)
        console.log(returnedValue)
    }


    return(
        
        <div className="border row text-white p-2">
            <form onSubmit={onSubmitHandler}>
            <div className="col-12 text-white-50">Add a new Contact</div>
            <div className="col-12 col-md-4 p-1">
                <input type="text"  ref={name} className="form-control form-control-sm" placeholder="Name...."/>
            </div>
            <div className="col-12 col-md-4 p-1">
                <input type="text"  ref={email} className="form-control form-control-sm" placeholder="Email...."/>
            </div>
            <div className="col-12 col-md-4 p-1">
                <input type="text"  ref={phoneNumber} className="form-control form-control-sm" placeholder="Phone Number...."/>
            </div>
            {
                errors.errorMessage!==undefined?
                <div className="col-12 col-md-4 p-1">
                {errors.errorMessage}
                </div>:<div></div>
            }
            {
                 errors.successMessage!==undefined?
                 <div className="col-12 col-md-4 p-1">
                 {errors.successMessage}
                 </div>:<div></div>
            }
            <div className="col-12 col-md-6 p-1 offset-md-3">
                <button className="btn btn-primary btn-sm form-control"> Create</button>
            </div>
            </form>
          </div>
    )
}
export default AddContact