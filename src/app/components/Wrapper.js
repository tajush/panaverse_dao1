"use server"
import React, { Children } from 'react'

const Wrapper = ({children}) => {
  return (
    <div className='max-w-screen-xl m-auto px-4 '>
        {children}
      
    </div>
  )
}

export default Wrapper
