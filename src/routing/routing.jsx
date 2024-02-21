import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
const About = React.lazy(() => import("../pages/about/About"));
const OurServices = React.lazy(() =>
  import("../pages/ourServices/OurServices")
);
const ContactUs = React.lazy(() => import("../pages/contactUs/Contact"));
const MobileApp = React.lazy(() =>
  import("../pages/portfolio/mobileApp/MobileApp")
);
const WebSite = React.lazy(() => import("../pages/portfolio/webSite/WebSite"));
const Digital = React.lazy(() => import("../pages/portfolio/digital/Digital"));
const GraphicDesign = React.lazy(() =>
  import("../pages/portfolio/graphicDesign/GraphicDesign")
);
const MediaProduction = React.lazy(() =>
  import("../pages/portfolio/mediaProduction/MediaProduction")
);

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/about-us"
        element={
          <Suspense>
            <About />
          </Suspense>
        }
      />
      <Route
        path="/our-services"
        element={
          <Suspense>
            <OurServices />
          </Suspense>
        }
      />
      <Route
        path="/contact-us"
        element={
          <Suspense>
            <ContactUs />
          </Suspense>
        }
      />
      <Route
        path="/graphic-design"
        element={
          <Suspense>
            <GraphicDesign />
          </Suspense>
        }
      />
      <Route
        path="/web-development"
        element={
          <Suspense>
            <WebSite />
          </Suspense>
        }
      />
      <Route
        path="/mobile-application"
        element={
          <Suspense>
            <MobileApp />
          </Suspense>
        }
      />
      <Route
        path="/digital-marketing"
        element={
          <Suspense>
            <Digital />
          </Suspense>
        }
      />
      <Route
        path="/media-production"
        element={
          <Suspense>
            <MediaProduction />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default Routing;
