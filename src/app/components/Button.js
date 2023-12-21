import React from 'react'

const Button = (props) => {
  return (
    <div>
    <button className="px-7 py-4 bg-[#00616C] rounded-full hover:shadow-lg text-white text-lg  font-semibold z-0 hover:scale-105 duration-300 capitalize active:scale-100">
      {props.text}
    </button>
  </div>
  )
}

export default Button
