import { useEffect } from "react";
import { useRef } from "react";

const FocusableInput = () => {
    const mountedRef = useRef(false)
    

    useEffect (() => {
        if(!mountedRef.current){
            mountedRef.current = true
            console.log('Mounting for the first time')
        } else {
            console.log('Mountig again for debug purposes')
        }
       
    },[]);

   
    return (
        <h1>Hi,Welcome in this exercise!</h1>
    )
}

export default FocusableInput