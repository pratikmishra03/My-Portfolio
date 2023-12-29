import React from "react";
import "./testimonial.css";
import AVTR1 from "../../Assets/me.png";

import { Pagination, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, illum! Nostrum suscipit quia veritatis illo culpa, rerum quibusdam, sint cumque veniam debitis neque officiis, minus aliquam libero iure a rem.",
  },
  {
    avatar: AVTR1,
    name: "Pussi",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, illum! Nostrum suscipit quia veritatis illo culpa, rerum quibusdam, sint cumque veniam debitis neque officiis, minus aliquam libero iure a rem.",
  },
  {
    avatar: AVTR1,
    name: "Awasthi",
    review:
      "   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, illum! Nostrum suscipit quia veritatis illo culpa, rerum quibusdam, sint cumque veniam debitis neque officiis, minus aliquam libero iure a rem.",
  },
  {
    avatar: AVTR1,
    name: "Pm",
    review:
      "   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, illum! Nostrum suscipit quia veritatis illo culpa, rerum quibusdam, sint cumque veniam debitis neque officiis, minus aliquam libero iure a rem.",
  },
  {
    avatar: AVTR1,
    name: "dfnjfd ",
    review:
      "   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, illum! Nostrum suscipit quia veritatis illo culpa, rerum quibusdam, sint cumque veniam debitis neque officiis, minus aliquam libero iure a rem.",
  },
];
const Testimonial = () => {
  return (
    <section id="testimonial">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonial_container"
        // install Swiper modules
        modules={[Pagination, A11y]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client_avatar">
                <img src={avatar} alt="AVTR" />
              </div>
              <h5 className="client_name">{name}</h5>
              <small className="client_review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonial;
