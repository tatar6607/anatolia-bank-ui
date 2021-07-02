import React from "react";
import { Carousel } from "react-bootstrap";
import Banner1 from "../images/carousel/1.jpg";
import Banner2 from "../images/carousel/2.jpg";
import Banner3 from "../images/carousel/3.jpg";
import "./Banner.css";

const Banner = () => {
  let images = [
    {
      image: Banner1,
      btnLabel: "Find out more",
      topic: "First slide label",
      description: "Internet banking for banking transactions wherever you are",
    },
    {
      image: Banner2,
      btnLabel: "Find out more",
      topic: "First slide label",
      description: "To Add value for your money",
    },
    {
      image: Banner3,
      btnLabel: "Find out more",
      topic: "First slide label",
      description: "Summer is here vacation loan to see new places",
    },
  ];
  return (
    <Carousel nextLabel="" prevLabel="">
      {images.map((data) => {
        const { image, btnLabel, description } = data;
        return (
          <Carousel.Item interval={20000}>
            <img className="d-block w-100 " src={image} alt="First slide" />

            <Carousel.Caption>
              <div className="w-50 ms-5 carousel-text-box text-center">
                <div>
                  <button className="btn btn-danger text-end">
                    {btnLabel}
                  </button>
                </div>

                <p className=" text-dark mt-3 carousel-desc-text ">
                  {description}
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

// import React from "react";
// import Istanbul from "../images/istanbul.jpg";
// import Antep from "../images/antep.jpeg";
// import { Carousel } from "react-bootstrap";
// import Pamukkale from "../images/pamukkale.jpg";
// import Kapadokya from "../images/kapa.jpg";
// import "./Banner.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// const Banner = () => {
//   return (
//     <div>
//       <header className="p-0 container-fluid">
//         <div
//           id="carouselExampleDark"
//           class="carousel carousel-light slide"
//           data-bs-ride="carousel"
//         >
//           <div class="carousel-indicators">
//             <button
//               type="button"
//               data-bs-target="#carouselExampleDark"
//               data-bs-slide-to="0"
//               class="active"
//               aria-current="true"
//               aria-label="Slide 1"
//             ></button>
//             <button
//               type="button"
//               data-bs-target="#carouselExampleDark"
//               data-bs-slide-to="1"
//               aria-label="Slide 2"
//             ></button>
//             <button
//               type="button"
//               data-bs-target="#carouselExampleDark"
//               data-bs-slide-to="2"
//               aria-label="Slide 3"
//             ></button>
//             <button
//               type="button"
//               data-bs-target="#carouselExampleDark"
//               data-bs-slide-to="3"
//               aria-label="Slide 4"
//             ></button>
//           </div>

//           <Carousel fade pause="hover">
//             <Carousel.Item interval={2000}>
//               <img className="d-block w-100" src={Istanbul} alt="First slide" />
//               <Carousel.Caption className="ist">
//                 <h3>
//                   Internet banking for banking transactions wherever you are
//                 </h3>

//                 <a
//                   className="btn btn-dark rounded-pill border border-light"
//                   href="https://bireysel.ziraatbank.com.tr/Transactions/Login/FirstLogin.aspx?ReturnUrl=%2f"
//                 >
//                   Find out more
//                 </a>
//               </Carousel.Caption>
//             </Carousel.Item>
//             <Carousel.Item interval={2000}>
//               <img className="d-block w-100" src={Antep} alt="Second slide" />{" "}
//               <Carousel.Caption className="ant">
//                 <h3>To Add value for your money</h3>

//                 <a
//                   className="btn btn-light rounded-pill border border-warning"
//                   href="https://negibi.com/paraniza-deger-katacak-yatirim-araclari/"
//                 >
//                   Find out more
//                 </a>
//               </Carousel.Caption>
//             </Carousel.Item>
//             <Carousel.Item interval={2000}>
//               <img
//                 className="d-block w-100"
//                 src={Pamukkale}
//                 alt="Third slide"
//               />
//               <Carousel.Caption className="pam">
//                 <h3>Summer is here vacation loan to see new places</h3>

//                 <a
//                   className="btn btn-danger rounded-pill border border-light"
//                   href="https://www.ziraatbank.com.tr/tr/kampanyalar/tatil-destek-kredi-paketi "
//                 >
//                   Find out more
//                 </a>
//               </Carousel.Caption>
//             </Carousel.Item>
//             <Carousel.Item interval={2000}>
//               <img
//                 className="d-block w-100"
//                 src={Kapadokya}
//                 alt="Fourth slide"
//               />
//               <Carousel.Caption className="kap">
//                 <h3>Individual retirement to be comfortable in retirement</h3>
//                 <a
//                   className="btn btn-primary rounded-pill border border-light"
//                   href="https://www.turkiyesigorta.com.tr/bireysel-emeklilik "
//                 >
//                   Find out more
//                 </a>
//               </Carousel.Caption>
//             </Carousel.Item>
//           </Carousel>
//         </div>
//       </header>
//     </div>
//   );
// };

export default Banner;
