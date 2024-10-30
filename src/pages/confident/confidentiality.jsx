import React from 'react'
import Navbar from '../../sections/navbar/Navbar';
import Footer from '../../sections/footer/Footer';
import Confident from "../../sections/confidentiality/confident";



import Theme from '../../theme/Theme';

const confidentiality = () => {
  
  return (
    <div className='none'>      
      <Navbar/>
      <Confident />
      <Footer/>
      <Theme/> 
    </div>
   
  )
}

export default confidentiality