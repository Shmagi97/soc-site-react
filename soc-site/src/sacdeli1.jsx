import { useRef } from "react"
import "./sacdeli1.css"
import Cda2 from "./sacdeli2"



const Cda1 = ()=> {

    function getFocus(){
        inputFocus.current.focus()
       
    }
    
    const inputFocus = useRef()

    return(
        <>
        <input type="text" className="sacdeli1" ref={inputFocus}/>
        <Cda2 
          gadacema = {getFocus}
        />
       
        </>
       
        
    )
}

export default Cda1