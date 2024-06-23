import BrandCard from "./BrandCard";
import ParticipantCard from "./ParticipantCard";
import RaceCard from "./RaceCard";
import EngineCard from "./EngineCard";
import ActionCard from "./ActionCard";

const CardTypeMapping = {
  RaceCard,
  ParticipantCard,
  BrandCard,
  EngineCard,
  ActionCard,
};

const defaultCard = "RaceCard";

const Card = ({ as, ...rest }) => {
  const CardType = (as && CardTypeMapping[as]) || CardTypeMapping[defaultCard];

  return <CardType {...rest} />;
};

export default Card;
