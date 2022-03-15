import React from "react";

const ContactSection = () => {
  return (
    <section className="contact" id="contact">
      <div className="heading">
        <img src="images/title-img.png" alt="heading" />
        <h3>contact us</h3>
      </div>

      <div className="row">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18317.95622937759!2d51.36941069997212!3d35.746189398185585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e0710d5918403%3A0x74f5290b67841378!2sMilad%20Tower!5e0!3m2!1sen!2sfr!4v1647379715689!5m2!1sen!2sfr"
        //   allowfullscreen=""
          className="map"
          loading="lazy"
        ></iframe>

        <div className="form">
            <div className="icon-container">

                <div className="icon">
                    <i className="fas fa-map"></i>
                    <h3>address :</h3>
                    <p>Tehran, Iran, - 021555</p>
                </div>

                <div className="icon">
                    <i className="fas fa-envelope"></i>
                    <h3>email :</h3>
                    <p>amirbagjani@gmail.com</p>
                </div>

                <div className="icon">
                    <i className="fas fa-phone"></i>
                    <h3>phone :</h3>
                    <p>+123-456-7890</p>
                </div>
                
            </div>

            <form>
                <input type="text" placeholder="Full name" className="box" />
                <input type="email" placeholder="Email" className="box" />
                <input type="number" placeholder="Phone" className="box" />
                <textarea className="box" placeholder="Message"></textarea>
                <input type="submit" value="send message" className="btn" />

            </form>

        </div>

      </div>

    </section>
  );
};

export default ContactSection;
