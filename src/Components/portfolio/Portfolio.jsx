import React from "react";
import "./Portfolio.css";
import Chat from '../../Assets/Projects/Chat.webp'
import Blog from '../../Assets/Projects/Blog-App.png'
import Netflix from '../../Assets/Projects/Netflix.jpg'
import Income from '../../Assets/Projects/income-expense.webp'
import weather from '../../Assets/Projects/Weather-app.avif'
import restaurent from '../../Assets/Projects/Restaurent.jpg'
import IMG1 from '../../Assets/portfolio6.jpg'
const Portfolio = () => {
  const data = [
    {
      id: 1,
      image: Chat,
      title: "REAL Time Chat-App",
      github: "https://github.com/pratikmishra03/-Chat-App",
      demo: "bdbdd",
    },
    {
      id: 2,
      image: Netflix,
      title: "Netflix-Clone",
      github: "https://github.com/pratikmishra03/Netflix-Clone",
      demo: "bdbdd",
    },
    {
      id: 3,
      image: Blog,
      title: "Blog-App",
      github: "https://github.com/pratikmishra03/Blog-App",
      demo: "bdbdd",
    },
    {
      id: 4,
      image: Income,
      title: "Income-Expense-Tracker",
      github: "https://github.com/pratikmishra03/Income-Tracker-App",
      demo: "bdbdd",
    },
    {
      id: 5,
      image: weather,
      title: "Weather-App",
      github: "https://github.com",
      demo: "bdbdd",
    },
    {
      id: 6,
      image: IMG1,
      title: "Admin-Panel",
      github: "https://github.com/pratikmishra03/Admin-Panel",
      demo: "bdbdd",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (  
              <article key={id} className="portfolio_item">
            <div className="portfolio_item-image">
              <img className="image "src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio_item-cta">
              <a href={github} className="btn" target="_blank">
                Github
              </a>
              {/* <a href={demo} className="btn btn-primary" target="_black">
                Live Demo
              </a> */}
            </div>
          </article>
            )
        })}
      </div>
    </section>
  );
};

export default Portfolio;
