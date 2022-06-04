import React from "react";
import TeamCard from "./TeamCard";
import imgUrl from "../assets/about.jpg";
import webDevelopment from "../assets/icons/web_development.svg";
import graphicsDesign from "../assets/icons/graphics_design.svg";
import seoMarketing from "../assets/icons/seo_and_marketing.svg";
import customerServices from "../assets/icons/customer_services.svg";
import appDevelopment from "../assets/icons/app_development.svg";
import uiUx from "../assets/icons/ui_ux_design.svg";
import productDesign from "../assets/icons/product_design.svg";
import dataAnalist from "../assets/icons/data_analyst.svg";

import gallery_1 from "../assets/gallery/team-1.jpg";
import gallery_2 from "../assets/gallery/work-2.jpg";
import gallery_3 from "../assets/gallery/work-3.jpg";
import gallery_4 from "../assets/gallery/work-4.jpg";
import gallery_5 from "../assets/gallery/work-5.jpg";
import gallery_6 from "../assets/gallery/work-6.jpg";
import Carousel from "./Carousel";

import brand1 from "../assets/trademarks/airbnb.png";
import brand2 from "../assets/trademarks/google.png";
import brand3 from "../assets/trademarks/mailchimp.png";
import brand4 from "../assets/trademarks/paypal.png";
import brand5 from "../assets/trademarks/stripe.png";


import TestimonialCard from "./TestimonialCard";
import CardBlog from "./CardBlog";
import FullCardBlog from "./FullCardBlog";



const MainContent = () => {
  return (
    <section className="main">
      <article className="about__container">
        <span className="about__subhead">About Us</span>
        <h3 className="about__title">
          We are{" "}
          <span className="about__title--text-blue">Professional Teams</span> to
          Growth your Business
        </h3>
        <p className="about__paragraph">
          But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give you a complete
          account of the system, and expound the actual teachings of the great
          explorer of
        </p>
        <a className="about__cta">Read More</a>
        <div className="about__imageContainer">
          <img className="about__image" src={imgUrl} alt="" />
        </div>
      </article>

      <article className="services__container">
        <span className="services__subhead text-center">Our Services</span>
        <h3 className="services__title text-center">
          See what can we do for your Projects
        </h3>

        <div className="services__card__container">
          <div className="services__card">
            <img
              className="services__card__icon"
              src={webDevelopment}
              alt="Image of the service"
            />
            <h5 className="services__card__title">Web Development</h5>
          </div>
          <div className="services__card">
            <img
              className="services__card__icon"
              src={graphicsDesign}
              alt="Image of the service"
            />
            <h5 className="services__card__title">Graphics Design</h5>
          </div>
          <div className="services__card">
            <img
              className="services__card__icon"
              src={seoMarketing}
              alt="Image of the service"
            />
            <h5 className="services__card__title">SEO & Marketing</h5>
          </div>
          <div className="services__card">
            <img
              className="services__card__icon"
              src={customerServices}
              alt="Image of the service"
            />
            <h5 className="services__card__title">Customer Services</h5>
          </div>
          <div className="services__card">
            <img
              className="services__card__icon"
              src={appDevelopment}
              alt="Image of the service"
            />
            <h5 className="services__card__title">App Development</h5>
          </div>
          <div className="services__card">
            <img
              className="services__card__icon"
              src={uiUx}
              alt="Image of the service"
            />
            <h5 className="services__card__title">UI/UX Design</h5>
          </div>
          <div className="services__card">
            <img
              className="services__card__icon"
              src={productDesign}
              alt="Image of the service"
            />
            <h5 className="services__card__title">Product Design</h5>
          </div>
          <div className="services__card">
            <img
              className="services__card__icon"
              src={dataAnalist}
              alt="Image of the service"
            />
            <h5 className="services__card__title">Data Analyst</h5>
          </div>
        </div>
      </article>

      <article className="teams__container text-center">
        <span className="teams__subhead">Our Teams</span>
        <h3 className="teams__title">The Expert Team on ReveTive</h3>
        <div className="prueba">
        <TeamCard />
        <TeamCard />
        <TeamCard />
        </div>
      </article>

      <article className="latest__container">
        <span className="latest__subhead">Portfolio</span>
        <div className="latest__title__container">
        <h3 className="latest__title">Our Latest Projects</h3>
        <button className="btn btn-outline-primary arrow">
          Browse Projects
          <div className="svg__container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-1 w-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </div>
        </button>
        </div>

        <div className="latest__gallery__container">
          <img className="latest__gallery__image" src={gallery_1} alt="" />
          <img className="latest__gallery__image" src={gallery_2} alt="" />
          <img className="latest__gallery__image" src={gallery_3} alt="" />
          <img className="latest__gallery__image" src={gallery_4} alt="" />
          <img className="latest__gallery__image" src={gallery_5} alt="" />
          <img className="latest__gallery__image" src={gallery_6} alt="" />
        </div>

        {/* <Carousel /> */}
        <div className="testimonial__container">
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        </div>
      </article>


      <article className="news__container">
        <span className="news__subhead">News</span>
        <h3 className="news__title">Read Our Latest News</h3>
        <CardBlog />
        <FullCardBlog />
        <FullCardBlog />
        <FullCardBlog />
        <button className="btn btn-primary">View More</button>
      </article>

      <article className="touch__container">
        <h3 className="touch__title">Stay in touch</h3>
        <p className="touch__paragraph">Just say hello or drop us a line. You can manulay send us email on <span className="text-blue">example@mail.com</span></p>
        <form className="touch__form">
         <div className="touch__field">
            <label className="touch__label" htmlFor="name">Name</label>
            <input className="touch__input" type="text" name="name" id="name" placeholder="Enter name.." />
          </div>
          <div className="touch__field">
            <label className="touch__label" htmlFor="email">Email</label>
            <input className="touch__input" type="email" name="email" id="email" placeholder="Email address.." />
          </div>
         
          <div className="touch__field">
            <label className="touch__label" htmlFor="subject">Subject</label>
            <input className="touch__input" type="text" name="subject" id="subject" placeholder="Subject.." />
          </div>
          <div className="touch__field">
            <label className="touch__label" htmlFor="message">Message</label>
            <textarea className="touch__input" name="message" id="message" cols="30" rows="10" placeholder="Enter message.."></textarea>
          </div>
          <button type="submit" className="btn btn-large btn-primary">Submit</button>
        </form>
      </article>

      <article className="brands__container">
        <img src={brand1} alt="brand 1" />
        <img src={brand2} alt="brand 2" />
        <img src={brand3} alt="brand 3" />
        <img src={brand4} alt="brand 4" />
        <img src={brand5} alt="brand 5" />
      </article>

    </section>
  );
};

export default MainContent;
