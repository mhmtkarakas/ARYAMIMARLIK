import React from 'react'
import "./Bathroom.css"

import bathroom from "../../asisst/bathroom.png";

const Bathroom = () => {
  return (
    <div className='bathroom '  data-aos="fade-up">
        <img src={bathroom} alt="bathroom" />
    </div>
  )
}

export default Bathroom