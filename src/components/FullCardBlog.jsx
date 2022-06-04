import React from "react";
import person_1 from "../assets/testimonials-avatar/person_1.jpg";

const FullCardBlog = () => {
  return (
    <div className="fullcard">
      <div className="testimonial__author">
        <div className="testimonial__avatar">
          <img className="avatar" src={person_1} alt="Image for first person" />
        </div>
        <div className="testimonial__texts">
          <h5 className="card__author">Sam Newman</h5>
          <h6 className="card__date">23 Apr 2020</h6>
        </div>
      </div>
        <p className="card__title"> What is Business Management?</p>
        <p className="card__paragraph">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        

      <div className="fullcard__cta__container">
        <a className="card__cta" href="#">
          Read More
        </a>
        <div className="cta__svg__container">
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

export default FullCardBlog;
