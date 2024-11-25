import React from 'react'

type Props = {
    name: string;
    age: number;
    city: string;
  };

function Child(props:Props) {
  return (
    <div className='flex justify-center items-center h-screen'>
        <div className='bg-blue-300 rounded-md shadow-md p-9 tracking-wider leading-3'>
      <h1 className='text-2xl'>Name : {props.name}</h1>
      <h1 className='text-2xl'>age : {props.age}</h1>
      <h1 className='text-2xl'>City : {props.city}</h1>
      </div>
    </div>
  )
}

export default Child
