import Image from 'next/image'
import { CiVideoOn } from "react-icons/ci";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CoreTracks from './components/CoreTracks';
import SpecializedTracks from './components/SpecializedTracks';
import Outcome from './components/Outcome';
import DropDownMenu from './components/DropDownMenu';


export default function Home() {
 
  
  return (
   <div >
    <DropDownMenu />
   
    <Navbar />
    <Hero />
    <CoreTracks />
    <SpecializedTracks />
    <Outcome />
    
   
    
    
    
    
   </div>
  )
}
