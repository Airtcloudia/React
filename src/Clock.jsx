import { useEffect, useState } from "react"

const Clock = () => {
    const [date, setdate ] = useState(new Date())

    useEffect(() => {
        setInterval(() => {
            setdate(new Date())
        }, 1000)
    }, [])
 return (
    <div>
        <h2>The time now is: {date.toLocaleTimeString()}</h2>
    </div>
 )
}

export default Clock