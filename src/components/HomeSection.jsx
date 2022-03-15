const HomeSection = () => {
  return (
    <section className="home" id="home">
      <div className="content">
        <img data-aos="fade-up" data-aos-delay="150" src="images/burger-baner.png" alt="burger-baner" />
        <h3 data-aos="fade-up" data-aos-delay="300" >So meaty you'll go crazy</h3>
        <p data-aos="fade-up" data-aos-delay="450" >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit impedit
          eligendi libero, officiis recusandae explicabo soluta provident omnis
          alias culpa esse, nulla magni voluptatum aperiam, odit laboriosam quam
          quasi ducimus.
        </p>
        <a data-aos="fade-up" data-aos-delay="600" href="#menu" className="btn">
          our menu
        </a>
      </div>
    </section>
  );
};

export default HomeSection;
