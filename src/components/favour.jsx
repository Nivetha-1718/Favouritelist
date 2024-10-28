import { Newcontext } from "./contain";
import { useContext } from "react";

function Favourite()
{
    const {Active,add,setadd} = useContext(Newcontext)
    const remove = (Active)=>{
        setadd(add.filter((fav)=>fav !== Active))
    }
return(
        <div className="pl-10 mt-10 flex flex-col gap-3">
         {add.map(function(item,index){
            return<><h1>{index + 1}{"."}{item}
            <button onClick={()=>remove(item)} className="bg-red-500 text-black p-2 rounded-md ml-44 cursor-pointer">Remove</button>
        </h1>
            </>
         })
        }
        </div>
      )
}

export default Favourite

