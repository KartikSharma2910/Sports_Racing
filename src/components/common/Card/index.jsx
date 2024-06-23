import BrandCard from "./BrandCard";
import ParticipantCard from "./ParticipantCard";
import RaceCard from "./RaceCard";

const CardTypeMapping = {
  RaceCard,
  ParticipantCard,
  BrandCard,
};

const defaultCard = "RaceCard";

const Card = ({ as, ...rest }) => {
  const CardType = (as && CardTypeMapping[as]) || CardTypeMapping[defaultCard];

  return <CardType {...rest} />;
};

export default Card;
