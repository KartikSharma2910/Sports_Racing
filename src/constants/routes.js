import {
  CarBrands,
  CarCategory,
  Cobras,
  Details,
  Driver,
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
];

export default routes;
