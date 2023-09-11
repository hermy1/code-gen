import React,{useEffect} from 'react'

function Ball({}) {
    let position :number = 0
    let direction :string = 'bottom'

    const x: object = {
        bottom: 0,
        right: 0,
    }
    const y: object = {
        bottom: 0,
        right: 0,
    }
    
useEffect(() => {
   
}, [])

    return (
    <div className={`bg-red-500 rounded-full absolute animate-bounce ball ${direction}-${position} right-0 bottom-0`}>
    </div>
  )
}

export default Ball