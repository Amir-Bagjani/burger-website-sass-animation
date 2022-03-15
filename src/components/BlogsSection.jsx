import React from "react";

const BlogsSection = () => {
  return (
    <section className="blogs" id="blogs">

      <div className="heading">
        <img src="images/title-img.png" alt="heading" />
        <h3>daily posts</h3>
      </div>

      <div className="box-container">

        <div className="box">
            <div className="image">
                <img src="images/blog-1.jpg" alt="blog-post" />
                <div className="icons">
                    <a href="#"><i className="fas fa-calendar"></i> 21st may, 2022 </a>
                    <a href="#"><i className="fas fa-user"></i> by admin </a>
                </div>
            </div>
            <div className="content">
                <h3>blog title goes here</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, omnis?</p>
                <a href="#" className="btn">read more</a>
            </div>
        </div>
        <div className="box">
            <div className="image">
                <img src="images/blog-2.jpg" alt="blog-post" />
                <div className="icons">
                    <a href="#"><i className="fas fa-calendar"></i> 21st may, 2022 </a>
                    <a href="#"><i className="fas fa-user"></i> by admin </a>
                </div>
            </div>
            <div className="content">
                <h3>blog title goes here</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, omnis?</p>
                <a href="#" className="btn">read more</a>
            </div>
        </div>
        <div className="box">
            <div className="image">
                <img src="images/blog-3.jpg" alt="blog-post" />
                <div className="icons">
                    <a href="#"><i className="fas fa-calendar"></i> 21st may, 2022 </a>
                    <a href="#"><i className="fas fa-user"></i> by admin </a>
                </div>
            </div>
            <div className="content">
                <h3>blog title goes here</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, omnis?</p>
                <a href="#" className="btn">read more</a>
            </div>
        </div>

      </div>

    </section>
  );
};

export default BlogsSection;
