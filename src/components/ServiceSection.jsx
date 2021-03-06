import React from "react";

const ServiceSection = () => {
  return (
    <section className="service">

      <div className="box" data-aos="fade-up" data-aos-delay="150">
        <i className="fas fa-hamburger"></i>
        <h3>best quality</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, amet.
        </p>
      </div>

      <div className="box" data-aos="fade-up" data-aos-delay="300">
        <i className="fas fa-shipping-fast"></i>
        <h3>free delivery</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, amet.
        </p>
      </div>

      <div className="box" data-aos="fade-up" data-aos-delay="450">
        <i className="fas fa-headset"></i>
        <h3>24/7 support</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, amet.
        </p>
      </div>

    </section>
  );
};

export default ServiceSection;
