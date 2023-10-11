import { useParams } from "react-router"
import SinglePageCard from "./SinglePageCard"
import Spacer from "../common/spacer"

const SinglePage = () => {
    const params = useParams()

  return (
      <>
          <Spacer />
          <SinglePageCard {...params} />
          <Spacer />
      </>
  )
}

export default SinglePage