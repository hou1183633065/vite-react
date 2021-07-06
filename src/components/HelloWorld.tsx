import React, { useState } from "react"

export default (props: any) => {
    const [count, updateCount] = useState(1)
    return (
        <div>
            <div>Count: { count }</div>
            <button onClick={()=>updateCount((count)=>--count)}>reduce</button>
            <button onClick={()=>updateCount((count)=>++count)}>plus</button>
        </div>
    )
}