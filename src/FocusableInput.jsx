import { useEffect } from "react";
import { useRef } from "react";

const FocusableInput = () => {
    const inputRef=useRef (null)

    useEffect (() => {
        inputRef.current.focus()
    },[]);
    return (
        <input ref={inputRef} type="text" />
    )
}

export default FocusableInput