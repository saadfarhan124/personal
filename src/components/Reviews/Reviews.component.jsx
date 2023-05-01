import React from "react";
import "./Reviews.scss";

const data = [
  {
    pic: "/assets/usdoctors.png",
    name: "Maria Kate",
    title: "Software Engineer",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et deleniti nesciunt sint eligendi reprehenderit reiciendis, quibusdam illo, beatae quia fugit consequatur laudantium velit magnam error. Consectetur distinctio fugit doloremque.",
  },
  {
    pic: "/assets/usdoctors.png",
    name: "Maria Kate",
    title: "UX Designer",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et deleniti nesciunt sint eligendi reprehenderit reiciendis, quibusdam illo, beatae quia fugit consequatur laudantium velit magnam error. Consectetur distinctio fugit doloremque.",
  },
  {
    pic: "/assets/usdoctors.png",
    name: "Maria Kate",
    title: "UX Designer",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et deleniti nesciunt sint eligendi reprehenderit reiciendis, quibusdam illo, beatae quia fugit consequatur laudantium velit magnam error. Consectetur distinctio fugit doloremque.",
  },
];

export const Reviews = () => (
  <section className="container testContainer" id="Reviews">
    <swiper-container
      navigation="true"
      loop={true}
      style={{
        "--swiper-navigation-size": "32px",
      }}
      autoplay={true}
      speed="1000"
    >
      {data.map((item, index) => (
        <swiper-slide key={index}>
          <div className="testItemContainer">
            <img
              className="responsive-img project-image testItemImg"
              src={item.pic}
            />
            <h4 className="heading text-center " id="contactHeading">
              {item.name}
            </h4>

            <p style={{ fontSize: 18 }}>{item.title}</p>
            <p style={{ width: "80%", textAlign: "center" }}>
              <i className="fas fa-quote-left pe-2"></i> {item.review}
            </p>
          </div>
        </swiper-slide>
      ))}
    </swiper-container>
  </section>
);
