import React from "react";

const Carousel = () => {
  return (
    <article className="carousel" aria-label="Gallery">
      <ol className="carousel__viewport">
        <li id="carousel__slide1" tabIndex="0" className="carousel__slide">
          <div className="carousel__snapper">
            
          </div>
        </li>
        <li id="carousel__slide2" tabIndex="0" className="carousel__slide">
          <div className="carousel__snapper"></div>
         
          
        </li>
        <li id="carousel__slide3" tabIndex="0" className="carousel__slide">
          <div className="carousel__snapper"></div>
          
          
        </li>
        <li id="carousel__slide4" tabIndex="0" className="carousel__slide">
          <div className="carousel__snapper"></div>
          
          
        </li>
      </ol>
      <aside className="carousel__navigation">
        <ol className="carousel__navigation-list">
          <li className="carousel__navigation-item">
            <a href="#carousel__slide1" className="carousel__navigation-button">
              Go to slide 1
            </a>
          </li>
          <li className="carousel__navigation-item">
            <a href="#carousel__slide2" className="carousel__navigation-button">
              Go to slide 2
            </a>
          </li>
          <li className="carousel__navigation-item">
            <a href="#carousel__slide3" className="carousel__navigation-button">
              Go to slide 3
            </a>
          </li>
          <li className="carousel__navigation-item">
            <a href="#carousel__slide4" className="carousel__navigation-button">
              Go to slide 4
            </a>
          </li>
        </ol>
      </aside>
    </article>
  );
};

export default Carousel;
