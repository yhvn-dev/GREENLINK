


export function Sidebar({children}) {
  return (


   <section className="container sidebar flex flex-col col-start-1 col-end-1 row-start-1 row-end-5">

        <div className="logo_div flex h-[10%] text-center">
          
        </div>
        <div className="btn_div h-[90%] w-[90%] items-start">

            {children}

        </div>

   </section>
  )


}