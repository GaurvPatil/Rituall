import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Pcards extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: false,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className = "Maincard">
      <div className="cards">
        <Slider {...settings}>
          <div className="Pcard">
            <img
              src="https://images.ctfassets.net/uuc5ok478nyh/28hfBJ1mqho10JHWUltf0X/720c1c1212efc928775e881214f528b8/Category-Multivitamin.jpg?w=580&h=359&q=90&fm=webp"
              alt="img1"
            />
            <p>
              {" "}
              <span>Shop</span> Multivitamin
            </p>
          </div>
          <div className="Pcard">
            <img
              src="https://images.ctfassets.net/uuc5ok478nyh/4HeUbLZGWaKoK7JPYdRuWg/0f36a544cda868ee9603f103c9cbefe0/Category-Protein__1_.jpg?w=580&h=359&q=90&fm=webp"
              alt="img1"
            />
            <p>
              <span>Shop</span> Protein
            </p>
          </div>
          <div className="Pcard">
            <img
              src="https://images.ctfassets.net/uuc5ok478nyh/59zqn8KhaMI6DcFJ38CnDu/98d1899324e223ceec2f7d1aff84c3ee/Category-Pregnancy__1_.jpg?w=580&h=359&q=90&fm=webp"
              alt="img1"
            />
            <p>
              {" "}
              <span>Shop</span> Pregnancy
            </p>
          </div>
          <div className="Pcard">
            <img
              src="https://images.ctfassets.net/uuc5ok478nyh/2RQ7pdzdW9JmLk0z0shhzM/cb2bdddeb740841de6153bea9e1b7d0f/Category-Bundles.jpg?w=580&h=359&q=90&fm=webp"
              alt="img1"
            />
            <p>
              <span>Shop</span> Bundles
            </p>
          </div>
        </Slider>
      </div>
      </div>
    );
  }
}

