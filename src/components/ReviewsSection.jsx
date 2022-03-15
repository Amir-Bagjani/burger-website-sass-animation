import React from 'react'

const ReviewsSection = () => {
  return (
    <section className='reviews' id='reviews'>
        <div className="heading">
            <img src="images/title-img.png" alt="heading" />
            <h3>testimonials</h3>
        </div>

        <div className="box-container">

            <div className="box">
                <img src="images/pic-1.png" alt="customer" />
                <h3>john doe</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate commodi debitis tempora, nam accusantium aliquid quo consectetur. Exercitationem, nobis tempora!</p>
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </div>
            </div>

            <div className="box">
                <img src="images/pic-2.png" alt="customer" />
                <h3>john doe</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate commodi debitis tempora, nam accusantium aliquid quo consectetur. Exercitationem, nobis tempora!</p>
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </div>
            </div>

            <div className="box">
                <img src="images/pic-3.png" alt="customer" />
                <h3>john doe</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate commodi debitis tempora, nam accusantium aliquid quo consectetur. Exercitationem, nobis tempora!</p>
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </div>
            </div>
            
        </div>

    </section>
  )
}

export default ReviewsSection