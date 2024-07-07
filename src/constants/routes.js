import {
  Busted,
  CarBrands,
  CarCategory,
  Cobras,
  ContactUs,
  Details,
  Driver,
  DriverBio,
  DriverSelection,
  Events,
  FAQ,
  Home,
  PrivacyPolicy,
  TermsAndConditions,
  Thankyou,
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
  {
    path: "/privacy-policy",
    element: PrivacyPolicy,
  },
  {
    path: "/faq",
    element: FAQ,
  },
  {
    path: "/contact-us",
    element: ContactUs,
  },
  {
    path: "/thankyou",
    element: Thankyou,
  },
  {
    path: "/events",
    element: Events,
  },
];

export default routes;
