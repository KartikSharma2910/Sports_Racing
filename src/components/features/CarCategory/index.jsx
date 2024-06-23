import { Fragment } from "react";
import Action from "./Action";
import Banner from "./Banner";
import Brands from "./Brands";
import Engine from "./Engine";

const CarCategory = () => {
  return (
    <Fragment>
      <Banner />
      <Engine />
      <Brands />
      <Action />
    </Fragment>
  );
};

export default CarCategory;
