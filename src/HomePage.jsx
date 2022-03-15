import HomeSection from "./components/HomeSection.jsx";
import MenuSection from "./components/MenuSection.jsx";
import ServiceSection from "./components/ServiceSection.jsx";

import "./styles/homepage.scss";

const HomePage = () => {
  return (
    <>
      <HomeSection />
      <ServiceSection />
      <MenuSection />
    </>
  );
};

export default HomePage;
