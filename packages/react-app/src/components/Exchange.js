import React from 'react'
import AmountIn from './AmountIn'
import AmountOut from './AmountOut'
import Balance from './Balance'

export default function Exchange({ pools }) {
  return (
    <div className='flex flex-col w-full items-center'>
      <div className='mb-8'>
        <AmountIn />

        <Balance />
      </div>
      <div className='mb-8 w-[100%]'>
        <AmountOut />

        <Balance />
      </div>
    </div>
  )
}
