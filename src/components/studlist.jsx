import { useState,useContext } from "react"
import { Newcontext } from "./contain"

function Student()
{
    const { Active,add,setadd} = useContext(Newcontext)
    const [correct,setcorrect] = useState(false)
    const addfav = (Active)=>{
        if (!add.includes(Active)){
            setadd([...add,Active])
                setcorrect(false)
                setcorrect(true)
        }
    }
 return(
       <>
       <div className="pl-10 mt-10 flex flex-col gap-3">
        {
            Active.map(function(item,index){
                return<><h1> {index+1}{"."}{item}
                <button className="bg-black text-white p-2 hover:text-black hover:bg-orange-400 rounded-md ml-44 cursor-pointer" onClick={()=>addfav(item)} disabled={correct}>Add to Favourite</button>
                </h1>
                </>
            })
        }
       </div>
       </>
       )
}
export default Student