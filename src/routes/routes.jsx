import { lazy } from "react";

export const appRoutes = [
  { path: "/", Component: lazy(() => import("../pages/Home/Home")) },
  { path: "/about-us", Component: lazy(() => import("../pages/AboutUs/AboutUs")) },
  { path: "/volunteers", Component: lazy(() => import("../pages/Volunteers/Volunteers")) },
  { path: "/stories", Component: lazy(() => import("../pages/Stories/Stories")) },
  { path: "/events", Component: lazy(() => import("../pages/Events/Events")) },
  { path: "/gallery", Component: lazy(() => import("../pages/Gallery/Gallery")) },
  { path: "/contact-us", Component: lazy(() => import("../pages/ContactUs/ContactUs")) },
  { path: "/become-volunteer", Component: lazy(() => import("../pages/BecomeVolunteer/BecomeVolunteer")) }
];
