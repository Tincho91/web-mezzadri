import { Image } from "@chakra-ui/react"

const PropertyInfo = ({ image, title }) => {
  return (
    <div>
      <Image src={image} alt={title} />
      <h1>{title}</h1>
    </div>
  )
}

export default PropertyInfo 