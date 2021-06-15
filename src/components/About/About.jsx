import React, { Component } from "react";

import image6 from '../../images/6.jpg'

import './About.css'

class About extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row about_us">
          <h2 className="text-center about_us" id="about_us">
            About Us
          </h2>
        </div>

        <div className="row ">
          <div className="col-md-6">
            <img
              src={image6}
              alt=""
              className="img-responsive about_image"
            />
          </div>
          <div className="col-md-6">
            <h3>PIZZA IS AWESOME</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur dipisicing elit.
              Consectetur cum nemo o dit id quibusdam, numquam deserunt, illo
              eveniet aliquid, fugit tenetur quos voluptatem ratione tempora
              harum adipisci quo sed ut.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur dipisicing elit.
              Consectetur cum nemo o dit id quibusdam, numquam deserunt, illo
              eveniet aliquid, fugit tenetur quos voluptatem ratione tempora
              harum adipisci quo sed ut.
            </p>
            <p>
              {" "}
              Lorem, ipsum dolor sit amet consectetur dipisicing elit.
              Consectetur cum nemo o dit id quibusdam, numquam deserunt, illo
              eveniet aliquid, fugit tenetur quos voluptatem ratione tempora
              harum adipisci quo sed ut. Lorem, ipsum dolor sit amet consectetur
              dipisicing elit. Consectetur cum nemo o dit id quibusdam, numquam
              deserunt, illo eveniet aliquid, fugit tenetur quos voluptatem
              ratione tempora harum adipisci quo sed ut. Lorem, ipsum dolor sit
              amet consectetur dipisicing elit. Consectetur cum nemo o dit id
              quibusdam, numquam deserunt, illo eveniet aliquid, fugit tenetur
              quos voluptatem ratione tempora harum adipisci quo sed ut. Lorem,
              ipsum dolor sit amet consectetur dipisicing elit. Consectetur cum
              nemo o dit id quibusdam, numquam deserunt, illo eveniet aliquid,
              fugit tenetur quos voluptatem ratione tempora harum adipisci quo
              sed ut. Lorem, ipsum dolor sit amet consectetur dipisicing elit.
              Consectetur cum nemo o dit id quibusdam, numquam deserunt, illo
              eveniet aliquid, fugit tenetur quos voluptatem ratione tempora
              harum adipisci quo sed ut.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur dipisicing elit.
              Consectetur cum nemo o dit id quibusdam, numquam deserunt, illo
              eveniet aliquid, fugit tenetur quos voluptatem ratione tempora
              harum adipisci quo sed ut. Lorem, ipsum dolor sit amet consectetur
              dipisicing elit. Consectetur cum nemo o dit id quibusdam, numquam
              deserunt, illo eveniet aliquid, fugit tenetur quos voluptatem
              ratione tempora harum adipisci quo sed ut. Lorem, ipsum dolor sit
              amet consectetur dipisicing elit. Consectetur cum nemo o dit id
              quibusdam, numquam deserunt, illo eveniet aliquid, fugit tenetur
              quos voluptatem ratione tempora harum adipisci quo sed ut. Lorem,
              ipsum dolor sit amet consectetur dipisicing elit. Consectetur cum
              nemo o dit id quibusdam, numquam deserunt, illo eveniet aliquid,
              fugit tenetur quos voluptatem ratione tempora harum adipisci quo
              sed ut. Lorem, ipsum dolor sit amet consectetur dipisicing elit.
              Consectetur cum nemo o dit id quibusdam, numquam deserunt, illo
              eveniet aliquid, fugit tenetur quos voluptatem ratione tempora
              harum adipisci quo sed ut. Lorem, ipsum dolor sit amet consectetur
              dipisicing elit. Consectetur cum nemo o
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
