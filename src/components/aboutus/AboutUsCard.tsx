import Image from "next/image";
interface AboutUsCardProps{
  icon:HTMLImageElement;
title:string;
paragraph:string
}
const AboutUsCard = (props:AboutUsCardProps) => {
  const{icon,title,paragraph} = props
  return (
    <div className='card col-12 col-md-5 border-0 bg-grey rounded-0 p-5  each-card'>
        <div className='mx-auto'>
            <span className='align-items-center  display-4'>
               <Image src={icon} alt={title}/>
        </span>
            <h3><span className='highlight'>Our</span>{title}</h3>
            <p>{paragraph}</p>
        </div>
    </div>

  )
}

export default AboutUsCard