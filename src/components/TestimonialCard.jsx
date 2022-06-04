import React from "react";
import person_1 from "../assets/testimonials-avatar/person_1.jpg"
import person_2 from "../assets/testimonials-avatar/person_2.jpg"
import person_3 from "../assets/testimonials-avatar/person_3.jpg"

const TestimonialCard = () => {
  return (
    <div className="testimonial__card">
      <p className="testimonial__paragraph">
        The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax
        quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz,
        vex nymphs. Waltz, bad nymph
      </p>
      <div className="testimonial__author">
        <div className="testimonial__avatar">
          <img className="avatar" src={person_1} alt="Image for first person" />
        </div>
        <div className="testimonial__texts">
          <h5 className="author__name">Sam Watson</h5>
          <h6 className="author__profession">CEO - Mosh Elite Ltd.</h6>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
