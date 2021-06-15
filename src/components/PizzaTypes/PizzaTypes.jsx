import React from "react";

import image3 from "../../images/3.jpg";
import image4 from "../../images/4.jpg";

import './PizzaTypes.css'

const PizzaTypes = (props) => {
  return (
    <div className="container">
      <div className="row pizza_types" id="pizza_types">
        <h2 className="text-center  pizza_types ">{props.title}</h2>
      </div>

      <div className="row">
        <div className="col-md-3 pizza_types_cols">
          <div className="thumbnail">
            <img src={image3} className="img-responsive pizza_types_images" />
            <div className="caption">
              <h3>Vegetarian Pizza</h3>
              <p>
                .dipisicing elit. Consectetur cum nemo o dit id quibusdam,
                numquam deserunt, illo eveniet aliquid, fugit tenetur quos
                voluptatem ratione tempora harum adipisci quo sed ut. Lorem,
                ipsum dolor sit amet consectetur dipisicing elit. Consectetur
                cum nemo o dipisicing elit. Consectetur cum nemo o dit id
                quibusdam, numquam deserunt, illo eveniet aliquid, fugit tenetur
                quos voluptatem ratione tempora harum adipisci quo sed ut.
                Lorem, ipsum dolor sit amet consectetur dipisicing elit.
                Consectetur cum nemo o..
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-3 pizza_types_cols">
          <div className="thumbnail">
            <img src={image4} className="img-responsive pizza_types_images" />
            <div className="caption">
              <h3>Pepperoni Pizza</h3>
              <p>
                .dipisicing elit. Consectetur cum nemo o dit id quibusdam,
                numquam deserunt, illo eveniet aliquid, fugit tenetur quos
                voluptatem ratione tempora harum adipisci quo sed ut. Lorem,
                ipsum dolor sit amet consectetur dipisicing elit. Consectetur
                cum nemo o dipisicing elit. Consectetur cum nemo o dit id
                quibusdam, numquam deserunt, illo eveniet aliquid, fugit tenetur
                quos voluptatem ratione tempora harum adipisci quo sed ut.
                Lorem, ipsum dolor sit amet consectetur dipisicing elit.
                Consectetur cum nemo o..
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3 pizza_types_cols">
          <div className="thumbnail">
            <img src={image3} className="img-responsive pizza_types_images" />
            <div className="caption">
              <h3>Cheese Pizza</h3>
              <p>
                .dipisicing elit. Consectetur cum nemo o dit id quibusdam,
                numquam deserunt, illo eveniet aliquid, fugit tenetur quos
                voluptatem ratione tempora harum adipisci quo sed ut. Lorem,
                ipsum dolor sit amet consectetur dipisicing elit. Consectetur
                cum nemo o dipisicing elit. Consectetur cum nemo o dit id
                quibusdam, numquam deserunt, illo eveniet aliquid, fugit tenetur
                quos voluptatem ratione tempora harum adipisci quo sed ut.
                Lorem, ipsum dolor sit amet consectetur dipisicing elit.
                Consectetur cum nemo o..
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3 pizza_types_cols">
          <div className="thumbnail">
            <img src={image4} className="img-responsive pizza_types_images" />
            <div className="caption">
              <h3>Bossu Pizza</h3>
              <p>
                .dipisicing elit. Consectetur cum nemo o dit id quibusdam,
                numquam deserunt, illo eveniet aliquid, fugit tenetur quos
                voluptatem ratione tempora harum adipisci quo sed ut. Lorem,
                ipsum dolor sit amet consectetur dipisicing elit. Consectetur
                cum nemo o dipisicing elit. Consectetur cum nemo o dit id
                quibusdam, numquam deserunt, illo eveniet aliquid, fugit tenetur
                quos voluptatem ratione tempora harum adipisci quo sed ut.
                Lorem, ipsum dolor sit amet consectetur dipisicing elit.
                Consectetur cum nemo o..
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PizzaTypes;
