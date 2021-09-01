import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Featuredproducts extends Component {
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
      <div className="Outerfcard">
        <div className="Featurehead">
          <h2>Featured Products</h2>
          <a href="#">Shop All</a>
        </div>
        <div className="Innerfcard">
          <Slider {...settings}>
            <div className="Innermostfcard">
              <img
                src="https://images.ctfassets.net/uuc5ok478nyh/1ZktS2HFz58J4p46qXEZE3/c5f97ad5a9bec6c5d10d452d32db3447/PDP_EFW_Bottle.jpg?w=280&h=280&q=100&fm=webp"
                alt="img1"
              />
              <div>
                <a href="#" className="Firsttag">
                  Essential for Women
                </a>
                <a href="#" className="Secondtag">
                  Multivitamin 18+
                </a>
                <a href="#" className="Thirdtag">
                  The clinical-backed multivitamin, reimagined for women 18+.
                </a>
              </div>
            </div>

            <div className="Innermostfcard">
              <div>
              <img
                src="https://images.ctfassets.net/uuc5ok478nyh/1ZktS2HFz58J4p46qXEZE3/c5f97ad5a9bec6c5d10d452d32db3447/PDP_EFW_Bottle.jpg?w=280&h=280&q=100&fm=webp"
                alt="img1"
              />
              <a href="#" className="Firsttag">
                Essential for Women
              </a>
              <a href="#" className="Secondtag">
                Prenatal Multivitamin
              </a>
              <a href="#" className="Thirdtag">
                The prenatal multivitamin for thinking, trying, and when it's
                time.
              </a>
              </div>
            </div>
            <div className="Innermostfcard">
              <div>
              <img
                src="https://images.ctfassets.net/uuc5ok478nyh/2YwsjloMBemmIMHFyHTSn2/fe327945e221a81b15d02da321c0dd38/PDP-EP18-Bag.jpg?w=280&h=280&q=100&fm=webp"
                alt="img1"
              />
              <a href="#" className="Firsttag">
                Essential Protein
              </a>
              <a href="#" className="Secondtag">
                Daily Shake 18+
              </a>
              <a href="#" className="Thirdtag">
                The reimagined plant-based protein for adults 18-49.
              </a>
              </div>
            </div>
            <div className="Innermostfcard">
              <div>
              <img
                src="https://images.ctfassets.net/uuc5ok478nyh/1ZktS2HFz58J4p46qXEZE3/c5f97ad5a9bec6c5d10d452d32db3447/PDP_EFW_Bottle.jpg?w=280&h=280&q=100&fm=webp"
                alt="img1"
              />
              <a href="#" className="Firsttag">
                Essential for Men
              </a>
              <a href="#" className="Secondtag">
                Multivitamin 18+
              </a>
              <a href="#" className="Thirdtag">
                Formulated for men 18-49 to help fill nutrient gaps in their
                diet.*              
            </a>
            </div>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
