import ActionCard from "./ActionCard";
import BrandCard from "./BrandCard";
import CobraCard from "./CobraCard";
import EngineCard from "./EngineCard";
import ParticipantCard from "./ParticipantCard";
import RaceCard from "./RaceCard";

const CardTypeMapping = {
  RaceCard,
  ParticipantCard,
  BrandCard,
  EngineCard,
  ActionCard,
  CobraCard,
};

const defaultCard = "RaceCard";

const Card = ({ as, ...rest }) => {
  const CardType = (as && CardTypeMapping[as]) || CardTypeMapping[defaultCard];

  return <CardType {...rest} />;
};

export default Card;
