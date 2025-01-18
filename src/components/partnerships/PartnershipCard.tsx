import Image from "next/image";

interface PartnershipCardProps {
    images: any;
    title: string;
    description: string;
}
const PartnershipCard = (props: PartnershipCardProps) => {
    const { images, title, description } = props;
    return (
        <div className=' container bg-white'>
            <div className='row d-flex p-3'>
                <div className='col-12 col-md-6 mb-3  '>
                    <Image src={images[0]} alt={title} className='img-fluid' />
                </div>
                <div className='col-12 col-md-6 '>
                    <Image src={images[1]} alt={title} className='img-fluid' />
                </div>

            </div>
            <div className='row'>
                <h3>Partnership with <span className='highlight'>{title}</span> </h3>
                <p>{description}</p>
            </div>


        </div>
    )
}

export default PartnershipCard