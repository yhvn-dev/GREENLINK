  import { Wp_header } from "./wp_header"
  import { UserTable } from "../../components/Users/userTable"
  import { useEffect, useState } from "react"
  import { Modal } from "./modal"

  import * as userService from "../../data/userService"
  import {SucessMsgs} from "../../components/Global/sucessMsgs"

export function Workspace({refreshChart}) {
  const [open,setOpen] = useState(false)
  const [mode,setMode] = useState("")
  const [sucessMsg,setSucessMsg] = useState("");
  const [backendError,setBackendError] = useState("");
  const [selectedUser,setSelectedUser] = useState(null)
  const [allUsers,setAllUsers] = useState([]) 

  const clearMsg = () => setSucessMsg("");

  useEffect(() =>{
    renderUsers();
  },[])
  
  const renderUsers = async () =>{
    try{
        const users = await userService.fetchAllUsers();
        setAllUsers(users)
    }catch(err){
      console.error("Error Rendering Users",err)
    }
  }

  const handleInsert = async (data) =>  {
    try {
        const newUser = await userService.insertUsers(data);
        await renderUsers()
        await refreshChart()

        console.log("NEW USER:",newUser)
        setOpen(false)

        setSucessMsg(`${newUser.fullname} is added`)
        console.log(`${newUser.fullname} is added`)

    } catch (err) {
      console.error("Error Inserting Users",err)
      setBackendError(err.response?.data?.message || err.message || "Error Inserting Users");

      if(typeof err === "object") return err;
      return {general: "Something went wrong"}
    }
  }
  

  const handleUpdate = async (data) =>{
    try {
      if(!selectedUser?.user_id) return;
      const updatedUser = await userService.updateUsers(selectedUser.user_id,data,setAllUsers)
      await renderUsers();
      await refreshChart()
      setOpen(false)

      setSucessMsg(`${selectedUser.fullname} is now updated `)
      console.log("UPDATED USER:",updatedUser)

    } catch (err) {
      console.error("Error Updating Users",err)
      setBackendError(err.response?.data?.message || err.message || "Error Updating Users");

      if(typeof err === "object") return err;
      return {general: "Something went wrong"}
    }
  }

  const handleDelete = async () =>{
    try{
      if(!selectedUser?.user_id) return;
      await userService.deleteUsers(selectedUser.user_id,setAllUsers)
      await renderUsers();
      await refreshChart()

      setOpen(false)
      setSucessMsg(`${selectedUser.fullname} is deleted successfully`)
      console.log("UPDATED USER:",selectedUser) 
    }catch(err){
      console.error("Error Deleting Users",err)
    }

  }
  
    // ================================================================================
    return (
      <div className="container user_con workspace flex flex-col h-[100%] w-full row-start-3 row-end-3
      col-start-2 col-end-4 overflow-y-auto">
          <Wp_header
              left={<>
                  <span className='m-x'>Users</span>
              </>}
              right={<>
                  <button className="btn-p m-x" 
                  onClick={() => 
                  {setMode("insert");
                  setSelectedUser(null);
                  setOpen(true)}}>Add User</button>
              </>
              }
            />

          <SucessMsgs txt={sucessMsg} clearMsg={clearMsg}/>
          
          <div className="table_holder flex flex-col items-center justify-start h-full w-full  overflow-y-auto shadow-[5px_5px_20px_1px_rgba(53,53,53,0.2)] rounded-[10px]">
              <UserTable
                users={allUsers}
                setOpen={setOpen}
                setMode={setMode}
                setSelectedUser={setSelectedUser}
              />
          </div>

          {open && ( <Modal 
              isOpen={open}
              onClose={() => setOpen(false)}
              mode={mode}
              handleSubmit={mode === "insert" ? handleInsert :
                            mode === "update" ? handleUpdate :
                                                handleDelete
              }
              userData={selectedUser}
              backendError={backendError}
          />)}       
      </div>

    )

  }