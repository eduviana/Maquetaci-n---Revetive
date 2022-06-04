import React from "react";

const CardBlog = () => {
  return (
    <div className="fullcard bg-blue">
      <div className="testimonial__author">
       
        <div className="testimonial__texts">
          <h5 className="card__author text-white">Sam Newman</h5>
          <h6 className="card__date text-white">23 Apr 2020</h6>
        </div>
      </div>
        <p className="card__title text-white"> What is Business Management?</p>
        
        

      <div className="fullcard__cta__container">
        <a className="card__cta text-white" href="#">
          Read More
        </a>
        <div className="cta__svg__container text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CardBlog;
