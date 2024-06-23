import { Fragment } from "react";
import Banner from "./Banner";
import Journey from "./Journey";
import OurMission from "./OurMission";
import OurPartner from "./OurPartner";
import ParticipantInformation from "./ParticipantInformation";
import RaceCategory from "./RaceCategory";
import RaceDetails from "./RaceDetails";
import Tape from "./Tape";
import Velocity from "./Velocity";

const Home = () => {
  return (
    <Fragment>
      <Banner />
      <Tape />
      <Journey />
      <RaceCategory />
      <Velocity />
      <RaceDetails />
      <ParticipantInformation />
      <OurPartner />
      <OurMission />
    </Fragment>
  );
};

export default Home;
