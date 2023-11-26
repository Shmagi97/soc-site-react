import "../buttons/shesvla.css"
import { useRef } from "react"

const Loggin = ({inputFocusFn})=> {
    
    // const inputFocus = useRef()
    
    function inputFocusFn(ref){
        ref.current.focus()
    }

    return (
        <div className="loginDivTeg">
           <button  onClick={()=>inputFocusFn()}>შესვლა</button>
           
        </div>
       
    )
}

export default Loggin