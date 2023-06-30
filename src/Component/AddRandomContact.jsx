import { GetUsers } from "../Utility/api"

const AddRandomContact = (props)=>{

    const GetRandomUsers = async()=>{
        const users = await GetUsers();
        console.log(users);
        return props.GetRandomData({
            id:users.data.id,
            name:users.data.first_name+" "+users.data.last_name,
            phone:users.data.phone_number,
            email:users.data.email,
            isFavorite:false
        })
    }

    return(
        <div>
            <button className="btn btn-secondary form-control" onClick={GetRandomUsers}> Add Random Contact </button>
        </div>
    )
}
export default AddRandomContact