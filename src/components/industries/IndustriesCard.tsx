import React, { ReactNode } from 'react'
 interface IndustriesCardProps{
    icon:ReactNode;
    title:string;
    text:string;
 }
const IndustriesCard = (props:IndustriesCardProps) => {
    const{icon,title,text} = props
  return (
    <div className=' indsutries-card  text-center bg-grey container  p-3 '>
<span>{icon}</span>
<h3 className='my-3'>{title}</h3>
<p>{text}</p>
<button className='btn primaryBtn industries-button'>See More</button>


    </div>
  )
}

export default IndustriesCard