import React from "react";
import "./Reviews.scss";

const data = [
  {
    pic: "https://media.licdn.com/dms/image/D5603AQGPup_lra9x6A/profile-displayphoto-shrink_200_200/0/1670731747527?e=1691625600&v=beta&t=UrQExD9jPyJ5Q2CtzOvT-78XnX09uk0fI_RUAnMNNsk",
    name: "Stan Bukriy",
    title: "Group Product Manager at CDL1000",
    review:
      "I had the opportunity to work with Saad on several products, and I was consistently impressed with his ability to reach all deadlines while maintaining the highest quality of work. As our tech team lead, Saad was responsible for managing a diverse team of backend and frontend developers, product managers, and software architects and produced top-quality results, even with frequent changes in project requirements. He was able to keep everyone focused and motivated, ensuring that we always delivered our best work on time. Saad was also a great collaborator, always willing to listen to feedback and incorporate it into his work. I would highly recommend Saad to anyone looking for a talented and dedicated software engineer who excels at team leadership and collaboration.",
  },
  {
    pic: "https://media.licdn.com/dms/image/D5603AQFdx23H75Zahg/profile-displayphoto-shrink_200_200/0/1683655235791?e=1691625600&v=beta&t=KtmzTS3trAG6ohyI3Hh3bCDghbHnFahVJot924XnW2I",
    name: "Clark Alexander",
    title: " Director of Research and Development at CDL1000",
    review:
      "Saad is a rare talent.  He has incredible maturity for his youth and is able to handle a major workload on relatively little instruction. I highly recommend any company in need of a software engineer, full stack developer, app developer to give Saad a look.  He's able to simultaneously manage a team and work deeply on the problems he has been given. I changed programming languages on him a couple of times, and he was able to get the implementations hooked into the new languages quickly and seemlessly.In addition to his incredible programming skill and team management skills, he's a great guy to work with.  Very friendly, responsive, and able to stand his ground against absurd requests.",
  },
  {
    pic: "https://media.licdn.com/dms/image/C4E03AQHgm9H86FM3MA/profile-displayphoto-shrink_200_200/0/1547743571675?e=1691625600&v=beta&t=I6IZ2TfLYodj0hh5ArC0e0lSd23lCxe-bs0Oq0z7HoA",
    name: "Sal Rehman",
    title: "Co-Founder USDoctors.co",
    review:
      "Saad is a great full stack developer. He’s attentive, organized, and committed. A pleasure to work with!",
  },
  {
    pic: "https://media.licdn.com/dms/image/D5603AQGSmLQxsGb8Vw/profile-displayphoto-shrink_200_200/0/1666356842878?e=1691625600&v=beta&t=6sGPdxvM84JWKfDiE01VmuwXEsalmoBOEmtJMDwTI9I",
    name: "Dr. Collier Griffin",
    title: "Product Manager at USDoctors.co",
    review:
      "Professional, great work ethic, and gives great ideas! Always a pleasure to work with.",
  },
  {
    pic: "https://media.licdn.com/dms/image/D5603AQEeesAAfmI9Ew/profile-displayphoto-shrink_800_800/0/1685083886265?e=1691625600&v=beta&t=tnKPFbKnMGaDEkMX6lcgdSVMZVErO_Dz-lwi7wuKh1g",
    name: "Irfan Khan",
    title: "Founder at XorToX",
    review:
      "Farhan has been working with me as a full-stack software developer since July 2020. He is a hard worker that can write thousands of lines of code with a smile on his face. He has helped me with various cross-platform apps, websites and e-commerce projects for USA based clients. I am very impressed by Farhan's communication skills which came in handy when gathering requirements or presenting deliverables to clients who weren't particularly tech savvy. Farhan takes his programming seriously and regularly takes online classes to experiment with new programming trends. I can throw any new technology framework at him and he'll build me a prototype over-night ... it is a magical experience. He is an easy going fellow who goes out of his way to sync with the team, and resolve any problems we may have. He is constantly looking for guidance and training, and posses all the right signs to become a young leader.",
  },
];

export const Reviews = () => (
  <section className="container" id="testimonials">
     <div className="heading-container">
        <div className="row">
          <h4 className="heading text-center " id="contactHeading">
            <code className="section-number">04.</code>Testimonials
          </h4>
        </div>
    </div>
    <div className="testContainer">
     
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
              <h4 className="heading text-center ">
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
    </div>
  </section>
);
