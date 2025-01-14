import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import chefHoney from "../../assets/chef-honey.jpeg";
import chefAbigail from "../../assets/chef-abigail.jpeg";
import chefObiageli from "../../assets/chef-obiageli.jpeg";
import chef1 from "../../assets/chef1.jpg";

const TestimonialCarousel = () => {
  const cardData = [
    {
      id: 1,
      cardImage: chefObiageli,
      cardName: "Obiageli Lekwa Ekine",
      cardUsername: "Chef Hippie",
      cardDetails: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
    },
    {
      id: 2,
      cardImage: chefHoney,
      cardName: "Chef Honey",
      cardUsername: "Pastry Chef",
      cardDetails: "Contrary to popular belief, Lorem Ipsum is not simply random text.  It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
    },
    {
      id: 3,
      cardImage: chefAbigail,
      cardName: "Abigail Chinyere Eyinnaya",
      cardUsername: "CMK Abigail",
      cardDetails: "Contrary to popular belief, Lorem Ipsum is not simply random text.  It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
    },
    {
      id: 4,
      cardImage: chef1,
      cardName: "Chef Mary",
      cardUsername: "CMK Mary",
      cardDetails: "Contrary to popular belief, Lorem Ipsum is not simply random text.  It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="lg:max-w-2xl lg:mx-auto lg:my-10 my-10 lg:p-20 ">
      <Slider {...settings}>
        {cardData.map((card) => (
          <div key={card.id} className="p-4 ">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="flex gap-7 p-3 ">
                <div className="">
                  <img
                    src={card.cardImage}
                    alt={card.cardName}
                    className="w-20 h-20 rounded-full"/>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-600">{card.cardName}</h3>
                  <p className="text-app-red">{card.cardUsername}</p>
                </div>

              </div>

              <div className="lg:p-10 p-5">
                <p className="lg:mt-2 text-black md:tracking-tighter md:text-sm">{card.cardDetails}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialCarousel;


