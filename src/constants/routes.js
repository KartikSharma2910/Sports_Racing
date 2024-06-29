import {
  CarBrands,
  CarCategory,
  Cobras,
  Details,
  Driver,
  DriverSelection,
  Home,
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
];

export default routes;
