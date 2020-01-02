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
            src="/Harp-Desktop.png"
            alt="Harp and Hawthorne desktop version"
            style={{ width: "100%", marginLeft: "96px" }}
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
            src="/Aloha-desktop.png"
            alt="Aloha desktop version"
            style={{ width: "100%" }}
          />
          <img
            src="/Aloha-tablet.png"
            alt="Aloha tablet version"
            className="aloha-tablet"
            style={{ width: "40%", marginLeft: "-224px", marginTop: "96px" }}
          />
          <img
            src="/Aloha-mobile.png"
            alt="Aloha mobile version"
            className="aloha-mobile"
            style={{ width: "25%", marginLeft: "-384px", marginTop: "160px" }}
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
            src="/Pong-desktop.png"
            alt="Pong desktop version"
            style={{ width: "100%", marginLeft: "96px" }}
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
            src="/Insta-desktop.png"
            alt="InstaNews desktop version"
            style={{ width: "100%" }}
          />
          <img
            src="/Insta-tablet.png"
            alt="InstaNews tablet version"
            className="insta-tablet"
            style={{ width: "40%", marginLeft: "-224px", marginTop: "96px" }}
          />
          <img
            src="/Insta-mobile.png"
            alt="InstaNews mobile version"
            className="insta-mobile"
            style={{ width: "25%", marginLeft: "-376px", marginTop: "160px" }}
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
            src="/Inhabitent-desktop.png"
            alt="Inhabitent desktop version"
            style={{ width: "100%", marginLeft: "96px" }}
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
            src="/QOD-desktop.png"
            alt="Quotes On Dev desktop version"
            style={{ width: "100%", marginLeft: "96px" }}
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
