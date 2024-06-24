import { Fragment } from "react";
import Action from "./Action";
import Banner from "./Banner";
import Features from "./Features";
import OurPartner from "./OurPartner";
import Specification from "./Specification";

const Details = () => {
  return (
    <Fragment>
      <Banner />
      <Specification />
      <Features />
      <Action />
      <OurPartner />
    </Fragment>
  );
};

export default Details;
