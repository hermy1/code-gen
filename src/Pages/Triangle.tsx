import { triangleData } from '../data/FakeData'
import { useNavigate } from 'react-router-dom'
function Triangle() {
    const navigate = useNavigate()
  return (
    <div>
        <h1 className='text-3xl medium'>Triangle</h1>
        <div className='grid grid-cols-3 gap-4'>
            {triangleData.map((item, index) => {
                return (
                    <div key={index} className='bg-green-200 p-4'>
                        <h3 className='text-2xl'>{item.name}</h3>
                        <button 
                            className='bg-blue-500 text-white px-4 py-2 mt-2 rounded-md'
                            onClick={() => navigate(`/shape/${item.id}`, {state: item})}
                        >{item.color}</button>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Triangle