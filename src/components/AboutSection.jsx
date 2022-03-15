import React from 'react'

const AboutSection = () => {
  return (
    <section className='about' id='about'>
        <div data-aos="fade-right" data-aos-delay="150" className="image">
            <img src="images/about-img.png" alt="about" />
        </div>

        <div data-aos="fade-left" data-aos-delay="150" className="content">
            <h3>step into burger heaven</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati enim perferendis ducimus dignissimos porro nulla reiciendis similique? Dolor maiores facere suscipit assumenda! Nisi inventore corrupti repellat voluptas eum debitis totam.</p>
            <div className="icons">
                <h3><i className="fas fa-check"></i> best price</h3>
                <h3><i className="fas fa-check"></i> best services</h3>
                <h3><i className="fas fa-check"></i> fresh ingredient</h3>
                <h3><i className="fas fa-check"></i> backed buns</h3>
                <h3><i className="fas fa-check"></i> natural cheese</h3>
                <h3><i className="fas fa-check"></i> veg & non-veg</h3>
            </div>
            <a href="#" className="btn">read more</a>
        </div>

    </section>
  )
}

export default AboutSection