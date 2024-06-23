import { Fragment } from "react";
import Action from "./Action";
import Banner from "./Banner";
import Engine from "./Engine";
import OurPartner from "./OurPartner";

const CarBrands = () => {
  return (
    <Fragment>
      <Banner />
      <Engine />
      <Action />
      <OurPartner />
    </Fragment>
  );
};

export default CarBrands;
