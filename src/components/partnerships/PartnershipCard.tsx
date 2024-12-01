import React from 'react'
interface PartnershipCardProps{
    image1:string;
    image2:string;
    title:string;
    paragraph:string;
}
const PartnershipCard = (props:PartnershipCardProps) => {
    const{image1,image2 ,title,paragraph} = props
  return (
    <div className=' container bg-white'>
        <div className='row d-flex p-3'>
            <div className='col-12 col-md-6 mb-3  '>
                <img src={image1} alt={title} className='img-fluid'/>
            </div>
            <div className='col-12 col-md-6 '>
                <img src={image2} alt={title} className='img-fluid' />
            </div>

        </div>
        <div className='row'>
            <h3>Partnership with <span  className='highlight'>{title}</span> </h3>
            <p>{paragraph}</p>
        </div>
        

    </div>
  )
}

export default PartnershipCard