import React,{useState} from "react";
import {useForm, SubmitHandler} from "react-hook-form"
type Contact = {
    name: string
    email: string
    reason:string
    notes:string
}

function Forms() {

    const {register, handleSubmit, watch, formState:{errors},} = useForm<Contact>()
    const onSubmit: SubmitHandler<Contact> = (data) => console.log(data) 

  return (
    <div className="space-y-10 divide-y divide-gray-900/10">
      <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-3">
        <div className="px-4 sm:px-0">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Profile
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Enter your profile information here. 
          </p>
        </div>

        <form className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2" onSubmit={handleSubmit(onSubmit)}>
          <div className="px-4 py-6 sm:p-8">
            <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="name"
                    className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    {...register('name',{required:true})}
                  />
                   {errors.name && <span className="text-red-400">This is required </span>}
                </div>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    {...register('email',{required: true})}
                    id="email"
                    className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                 {errors.email && <span className="text-red-400">This is required </span>}
                </div>
              </div>
            </div>
            <button
            type='submit'
            className='bg-blue-500 text-white px-4 py-2 mt-2 rounded-md'
            >Submit</button>
          </div>
        </form>
      </div>
    </div>

  );
}

export default Forms;
