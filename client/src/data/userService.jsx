import api from "../utils/api";


export const fetchAllUsers = async () => {
    try{
        const res = await api.get("/users");
        return res.data
    }catch(err){
        console.err("Error Fetching Users",err);
        throw err
    }
}

export const getUsersCount = async () =>{
    try{
        const res = await api.get("/users/count")
        return res.data
    }catch(err){
        console.err("Error Fetching Users",err);
        throw err
    }
}

export const getUsersCountByRole = async () =>{
    try{
        const res = await api.get("/users/roles")
        return res.data
    }catch(err){
        console.err("Error Fetching Users",err);
        throw err
    }
}



export const insertUsers = async (data) =>{
    try{
        const res = await api.post("/users/",data)
        console.log("User Added Succesfully")    
        return res.data        
    }catch(err){
        console.error("Error Inserting Users",err);
        const backendErrors = err.response?.data?.errors;
            if (backendErrors) {
                const formatted = {};
                backendErrors.forEach(e => { formatted[e.param] = e.msg });
                throw formatted; 
            }
        throw err
    }
} 

export const updateUsers = async (selectedUser,data,setAllUsers) =>{

    if(!selectedUser){console.error("No user selected for update"); }

    try{
         
        const res = await api.put(`/users/${selectedUser}`,data)
        setAllUsers((prev) =>
            prev.map(u => u.user_id === selectedUser ? res.data : u)
        )
        return res.data
    }catch(err){
         console.error("Error Updating Users",err)
         throw err
    }
}


export const deleteUsers = async (selectedUser,setAllUsers) => {

    if (!selectedUser) { console.error("No user selected for delete"); return;
    }

    try{

    console.log("Deleting user:", selectedUser); 
    const res = await api.delete(`/users/${selectedUser}`);
    console.log("User Deleted Successfully");

    setAllUsers((prev) =>
        prev.filter((u) => u.user_id !== selectedUser.user_id));

    return res.data

    } catch (err) {
        console.error("Error Deleting Users:",
        err.response?.data || err.message
    );
    }
};

