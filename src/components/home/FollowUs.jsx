import { Button, Container } from "react-bootstrap"
import { data } from '../../helpers/data/data'
import {AiFillInstagram} from 'react-icons/ai'
import './followus.scss'
const FollowUs = () => {
  return (
    <Container fluid >
      <div className="followUs">
          <h2>{data.followUs.title}</h2>
          {data.followUs.content}
          <Button
              variant="outline-dark"
              target="blank"
              href="https://instagram.com"
          ><AiFillInstagram style={{fontSize:"1.7rem"}} />
               {data.followUs.btn}
        </Button>
        </div>
    </Container>
  )
}

export default FollowUs