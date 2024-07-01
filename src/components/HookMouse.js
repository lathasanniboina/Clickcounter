import { useEffect,useState } from "react"


function HookMouse() {
    const [x,setx]=useState(0)
    const [y,sety]=useState(0)
    const logMousePosition=e=>{
        console.log("Mouse Event")
        setx(e.clientX)
        sety(e.clientY)
    }
    useEffect(()=>{
        console.log('mouse event')
        window.addEventListener('mousemove',logMousePosition)
    },[])
  return (
    <div>
        x{x}-y{y}
      
    </div>
  )
}

export default HookMouse
