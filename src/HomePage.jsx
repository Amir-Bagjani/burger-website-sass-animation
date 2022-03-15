import AboutSection from "./components/AboutSection.jsx";
import HomeSection from "./components/HomeSection.jsx";
import MenuSection from "./components/MenuSection.jsx";
import ReviewsSection from "./components/ReviewsSection.jsx";
import ServiceSection from "./components/ServiceSection.jsx";

import "./styles/homepage.scss";

const HomePage = () => {
  return (
    <>
      <HomeSection />
      <ServiceSection />
      <MenuSection />
      <AboutSection />
      <ReviewsSection />
    </>
  );
};

export default HomePage;
