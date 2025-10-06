
import Pfp from "../../assets/Images/Default Profile Picture 2.jpg"

export function Db_Header({left,user}) {
  return (

    <section className="container col-start-2 col-end-4 header flex items-center justify-center">
        <div className="left_header half">{left}</div>
        <div className="right_header half flex-row-reverse">
           <img src={user?.profile_picture ? `http://localhost:5000/uploads/${user.profile_picture}` : Pfp} 
           className='profile-img max-w-[2rem] max-h-[2rem] h-[3rem] w-[3rem]'></img>
            <ul className="col_text ">  
              <p className='name-txt'>{user?.username || "Guest"}</p>
              <p className='role-txt text-[0.8rem] text-[var(--acc-darkc)]'>{user?.role || "Viewer"}</p>
            </ul>
        </div>
    </section>

  )
}

    