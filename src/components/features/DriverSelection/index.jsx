import { Fragment } from "react";
import Tape from "../Home/Tape";
import Banner from "./Banner";
import Switcher from "./Switcher";

const DriverSelection = () => {
  return (
    <Fragment>
      <Banner />
      <Tape />
      <Switcher />
    </Fragment>
  );
};

export default DriverSelection;
