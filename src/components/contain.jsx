import { createContext, useState } from "react"

const Newcontext = createContext()

const Container=(data)=>{
 
    const [add,setadd] = useState([])
    const [Active,setActive] = useState([" Nivetha "," Monika "," Deepika "," Kavitha "," Yamuna "])

    return(
        <>
        <Newcontext.Provider value={{Active,add,setadd}}>
         {data.children}
        </Newcontext.Provider>
        </>
    )
}

export default Container
export {Newcontext}
