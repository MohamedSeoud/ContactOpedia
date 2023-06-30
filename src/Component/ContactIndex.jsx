import Header from "./Layout/Header";
import AddRandomContact from "./AddRandomContact";
import RemoveAllContact from "./RemoveAllContact";
import AddContact from "./AddContact";
import FavoriteContacts from "./FavoriteContacts";
import GeneralContacts from "./GeneralContacts";
import Footer from "./Layout/Footer";
import { useState } from "react";



const ContactIndex = (props)=>{


const [contactList,setContactList] =useState([{
    id:1,
    name:'Mohamed Seoud',
    phone:'125-698-659-127',
    email:'mmm@mmm.com',
    isFavorite:false
},
{
    id:2,
    name:'Omar Sherif',
    phone:'125-698-659-127',
    email:'ooo@ooo.com',
    isFavorite:true
},
{
    id:3,
    name:'Seif Saleh',
    phone:'125-698-659-127',
    email:'sss@sss.com',
    isFavorite:false
},
{
    id:4,
    name:'Karim Hafez',
    phone:'125-698-659-127',
    email:'kkk@kkk.com',
    isFavorite:false
}])
 const[selectItem,setSelectedItem]= useState({});

    const onClickHandler=(item)=>{
        console.log(item);
        if(item.name.trim()==='' || item.email.trim()===''||item.phone.trim()===''){
            return{errorMessage:'Please Put Invalid Data' ,successMessage:undefined}
        }
        const itemFound = contactList.find((record)=>record.name ===item.name && record.email===item.email && record.phone===item.phone);
        if(itemFound){
            return{errorMessage:'Duplication' ,successMessage:undefined}

        }

        setContactList((previous)=>[...previous,item]);
        return{errorMessage:undefined ,successMessage:'Added Successfully.'}
    }

    const onAddHandler = (id)=>{
      const modifiedList = contactList;
      const index = modifiedList.find(c=>c.id===id)
      modifiedList[index].isFavorite= !modifiedList[index].isFavorite;
      setContactList(modifiedList);
    }
    const onAddRandomUsers =(items)=>{
        setContactList((previous)=>{
            return[...previous,items]
        })
    }
    const onSelectHandler =(contact)=>{
        if(!contact){
            return;
        }
        setSelectedItem(contact);
        console.log(selectItem);
    }

    return(
            <div>
                <Header/>
                <div className="container" style={{minHeight:"85vh"}}>
                    <div className="row py-3">
                        <div className="col-4 offset-2">
                            <AddRandomContact GetRandomData={onAddRandomUsers}/>
                        </div>
                        <div className="col-4">
                            <RemoveAllContact/>
                        </div>
                        <div className="row py-2">
                            <AddContact onClickHandler={onClickHandler}/>
                        </div>
                        {/* <div className="row py-2">
                            <FavoriteContacts contacts={contactList.filter((item)=>item.isFavorite===true)}/>
                        </div> */}
                        <div className="row py-2">
                            <GeneralContacts
                             onClick= {onAddHandler}
                             onSelect={onSelectHandler}
                             contacts={contactList.filter((item)=>item.isFavorite===false)}
                              />
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>

        )}


export default ContactIndex