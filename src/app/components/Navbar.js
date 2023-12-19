import React from 'react'
import logo from '/public/logo.png'
import Image from 'next/image'
import Wrapper from './Wrapper'

const Navbar = () => {
  return (
   <Wrapper>
     <div>
       <Image src={logo} alt='logo'></Image>
        
      
    </div>
   </Wrapper>
  )
}

export default Navbar
