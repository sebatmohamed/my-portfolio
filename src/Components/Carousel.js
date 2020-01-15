import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";

const Carousel = () => {
  const params = {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 600,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false
    },
    parallax: true,
    parallaxEl: {
      el: ".parallax-bg",
      value: "-23%"
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    breakpoints: {
      768: {
        spaceBetween: 150
      },

      375: {
        spaceBetween: 300
      },
    }
  }

  return (
    <Swiper {...params}>
      <div>
        <div className="repo-images">
          <img
            src="/Harp-desktop.jpg"
            alt="Harp and Hawthorne desktop version"
            className="desktop"
          />
        </div>
        
        <div className="repo-info">
          <h1>Wordpress:</h1>
          <p>A sophisticated, elegant client project. See live <a href="https://harpandhawthorne.com/" target="_blank"><span>website!</span></a></p>
        </div>
      </div>
      
      <div>
        <div className="repo-images">
          <img
            src="/Aloha-desktop.jpg"
            alt="Aloha desktop version"
            className="aloha-desktop"
          />
          <img
            src="/Aloha-tablet.jpg"
            alt="Aloha tablet version"
            className="aloha-tablet"
          />
          <img
            src="/Aloha-mobile.jpg"
            alt="Aloha mobile version"
            className="aloha-mobile"
          />
        </div>

        <div className="repo-info">
          <h1>HTML/CSS:</h1>
          <p>A mobile first responsive ecommerce website</p>
        </div>
      </div>

      <div>
        <div className="repo-images">
          <img
            src="/Pong-desktop.jpg"
            alt="Pong desktop version"
            className="desktop"
          />
        </div>
        <div className="repo-info">
          <h1>JavaScript:</h1>
          <p>A collaborative pong game designed with our own creativity</p>
        </div>
      </div>

      <div>
        <div className="repo-images">
          <img
            src="/Insta-desktop.jpg"
            alt="InstaNews desktop version"
            className="insta-desktop"
          />
          <img
            src="/Insta-tablet.jpg"
            alt="InstaNews tablet version"
            className="insta-tablet"
          />
          <img
            src="/Insta-mobile.jpg"
            alt="InstaNews mobile version"
            className="insta-mobile"
          />
        </div>

        <div className="repo-info">
          <h1>JavaScript:</h1>
          <p>A mobile first responsive website that uses an API</p>
        </div>
      </div>

      <div>
        <div className="repo-images">
          <img
            src="/Inhabitent-desktop.jpg"
            alt="Inhabitent desktop version"
            className="desktop"
          />
        </div>
        <div className="repo-info">
          <h1>Wordpress:</h1>
          <p>A snazzy hipster brand website</p>
        </div>
      </div>

      <div>
        <div className="repo-images">
          <img
            src="/QOD-desktop.jpg"
            alt="Quotes On Dev desktop version"
            className="desktop"
          />
        </div>

        <div className="repo-info">
          <h1>Wordpress:</h1>
          <p>A quote generator about developers</p>
        </div>
      </div>
    </Swiper>
  );
};

export default Carousel;