import { Fragment } from "react";
import Banner from "./Banner";
import Journey from "./Journey";
import RaceCategory from "./RaceCategory";
import Tape from "./Tape";

const Home = () => {
  return (
    <Fragment>
      <Banner />
      <Tape />
      <Journey />
      <RaceCategory />
    </Fragment>
  );
};

export default Home;
