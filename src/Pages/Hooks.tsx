import React,{useEffect,useRef,useState} from 'react'
function Hooks() {
    const [counter, setCounter] = useState(0);
    const [name, setName] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);
    const [show, setShow] = useState('');

    useEffect(() => {
      if(counter === 10) {
        setShow('Counter is 10');
      }
    }, [counter]);

    const add = () => {
        setCounter(counter + 1); 
    }

    const subtract = () => {
        setCounter(counter - 1);
    }

    const reset = () => {
        setCounter(0);
        setName('');
        setShow('');
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

  return (
    <div className=''>
      <h1 className='text-3xl medium'>Hooks</h1>
        <div className='m-4'>
        <input type="text" onChange={onChange} name="name" id='name' ref={inputRef} value={name} className='my-4 g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5' />
        <button className='bg-green-500 py-2 px-4 rounded text-white font-bold' onClick={() => {
            inputRef.current?.focus();
        }}>Focus</button>
        <p className='text-2xl'>Name: {name}</p>
        <p className='text-2xl'>counter: {counter}</p>
        </div>
        <div className='m-3'>
          <button  className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4' onClick={()=> add()}>add +</button>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4' onClick={()=>reset()}>reset</button>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4' onClick={()=> subtract()}>sub -</button>
        </div>
      <p>{show}</p>
    </div>
  )
}

export default Hooks
