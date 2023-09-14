import React from 'react'

function Home() {
  return (
    <div>
      <div className=' p-5'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='max-w-3xl mx-auto'>
            <div className='flex flex-col items-center mt-16'>
              <h1 className='text-5xl font-extrabold text-gray-900'>
                Welcome to <span className='text-indigo-600'>React Router</span>
              </h1>
              <p className='mt-3 text-xl text-gray-600 text-center'>
                React Router is a collection of navigational components that compose declaratively with your application.
              </p>
              <div className='mt-6'>
                <a
                  className='text-white font-medium text-indigo-600 bg-blue-600 hover:bg-indigo-50 hover:text-indigo-700 px-5 py-3 border border-transparent rounded-md shadow'
                  href={'/about'}
                >
                  Get started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home