import React,{useEffect, useRef} from 'react'

function Ball({}) {

const [position,setPositon] = React.useState({})
const parentDiv = {
    maxWidth: 450,
    maxHeight: 250,
}



useEffect(() => {
   const randomX = Math.floor(Math.random() * parentDiv.maxWidth)
    const randomY = Math.floor(Math.random() * parentDiv.maxHeight)
    console.log(position)
    setTimeout(() => {
        setPositon({top: randomY, left: randomX})
    }, 2000)
}, [position])




    return (
    <div className={`bg-red-500 rounded-full absolute animate-bounce ball`}
    style={position}
    >
    </div>
  )
}

export default Ball