interface ServiceCardProps {
  title: string;
  cardparagraph: string
}


const ServiceCard = (props: ServiceCardProps) => {
  const { title, cardparagraph } = props;

  return (
    <div className='service-card  card rounded-0 gap-2 py-5'>
      <h6 className='service-title'>{title}</h6>
      <p>{cardparagraph}</p>
    </div>
  )
}

export default ServiceCard