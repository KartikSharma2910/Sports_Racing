import {
  Busted,
  CarBrands,
  CarCategory,
  Cobras,
  Details,
  Driver,
  DriverBio,
  DriverSelection,
  Home,
  TermsAndConditions,
} from "components/features";

const routes = [
  {
    path: "/",
    element: Home,
  },
  {
    path: "/car-category",
    element: CarCategory,
  },
  {
    path: "/cobras",
    element: Cobras,
  },
  {
    path: "/car-brands",
    element: CarBrands,
  },
  {
    path: "/details",
    element: Details,
  },
  {
    path: "/driver",
    element: Driver,
  },
  {
    path: "/driver-selection",
    element: DriverSelection,
  },
  {
    path: "/driver-bio",
    element: DriverBio,
  },
  {
    path: "/busted",
    element: Busted,
  },
  {
    path: "/terms-and-conditions",
    element: TermsAndConditions,
  },
];

export default routes;
