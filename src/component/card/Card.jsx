import { CardWrapper } from "./Card.styles"

const Card = ({ details }) => {
  return (
    <CardWrapper>
      {/* <img src={details?.Poster} alt="poster" /> */}
      <div>
        <h4> {details?.Title} </h4>
      </div>
    </CardWrapper>
  );
}

export default Card