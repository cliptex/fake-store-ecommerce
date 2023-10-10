
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

// eslint-disable-next-line react/prop-types
const StarRating = ( {rate} ) => {
  let stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < Math.round(rate)) {
      stars.push(<AiFillStar style={{ color: "goldenrod" }} key={i} />);
    } else {
      stars.push(<AiOutlineStar key={i} />);
    }
  }

  return <div>{stars}</div>;
}

export default StarRating;
