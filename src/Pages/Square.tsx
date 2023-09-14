import { squareData } from '../data/FakeData'
import { useNavigate } from 'react-router-dom'

function Square() {
    const navigate = useNavigate()
  return (
    <div>
        <h1 className='text-3xl medium'>Square</h1>
        <div className='grid grid-cols-3 gap-4'>
            {squareData.map((item, index) => {
                return (
                    <div key={index} className='bg-green-200 p-4'>
                        <h3 className='text-2xl'>{item.name}</h3>
                        <button 
                            className='bg-blue-500 text-white px-4 py-2 mt-2 rounded-md'
                            onClick={() => navigate(`/profile/${item.id}`)}
                        >{item.color}</button>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Square