import { useEffect, useState } from "react"


function HookCounter() {
    const [count,setcount]=useState(0)
    useEffect(() =>{
      document.title=`clicked ${count} times`

    })
  return (
    <div>
        <button onClick={()=>setcount(count+1)}>count {count} times</button>
      
    </div>
  )
}

export default HookCounter