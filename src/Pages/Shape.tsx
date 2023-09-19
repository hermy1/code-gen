import React from 'react'
import { useParams, useLocation } from 'react-router-dom'

type Params = {
    shapeId: string;
}
function Shape() {
const { state } = useLocation();
console.log(state);
const params = useParams<Params>();
const shapeId = params.shapeId ? params.shapeId : '';
  return (
    <div className='w-1/2 bg-slate-300 p-4 rounded-lg'>
        <h1 className='text-3xl medium'>Shape</h1>
        <h1>Name: {state.name}</h1>
        <p>Color: {state.color}</p>
        <p>Id: {shapeId}</p>
    </div>
  )
}

export default Shape