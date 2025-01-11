
const FooterServicesList = (props: { title: string; items: string[] }) => {
  const { title, items } = props;
  return (
    <>
      <h6 className="text-white">{title}</h6>
      <ul className="list-unstyled">
        {items.map((item, index: number) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  )
}
export default FooterServicesList