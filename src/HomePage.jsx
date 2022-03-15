import AboutSection from "./components/AboutSection.jsx";
import BlogsSection from "./components/BlogsSection.jsx";
import ContactSection from "./components/ContactSection.jsx";
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
      <ContactSection />
      <BlogsSection />
    </>
  );
};

export default HomePage;
