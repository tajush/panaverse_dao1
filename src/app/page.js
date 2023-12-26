import Image from 'next/image'
import { CiVideoOn } from "react-icons/ci";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CoreTracks from './components/CoreTracks';
import SpecializedTracks from './components/SpecializedTracks';
import Outcome from './components/Outcome';



export default function Home() {
 
  
  return (
   <div >
    
   
    <Navbar />
    <Hero />
    <CoreTracks />
    <SpecializedTracks />
    <Outcome />
    
   
    
    
    
    
   </div>
  )
}
