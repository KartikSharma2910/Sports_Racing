import { Fragment } from "react";
import Action from "./Action";
import Banner from "./Banner";
import OurPartner from "./OurPartner";
import Switcher from "./Switcher";

const Driver = () => {
  return (
    <Fragment>
      <Banner />
      <Switcher />
      <Action />
      <OurPartner />
    </Fragment>
  );
};

export default Driver;
