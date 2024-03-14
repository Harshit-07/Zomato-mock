import React from "react";
import "../css/content.css";

function Content() {
  return (
    <div className="inspiration-section">
      <h2>Inspiration for your first order</h2>
      <div className="inspiration-images">
        <div className="image-container">
          <img
            src="https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png"
            alt="Pizza"
          />
          <p>Pizza</p>
        </div>
        <div className="image-container">
          <img
            src="https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png"
            alt="Biryani"
          />
          <p>Biryani</p>
        </div>
        <div className="image-container">
          <img
            src="https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png"
            alt="Pasta"
          />
          <p>Rolls</p>
        </div>
        <div className="image-container">
          <img
            src="https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png"
            alt="Cake"
          />
          <p>Cake</p>
        </div>
        <div className="image-container">
          <img
            src="https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png"
            alt="Burger"
          />
          <p>Burger</p>
        </div>
        <div className="image-container">
          <img
            src="https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png"
            alt="Chicken"
          />
          <p>Chicken</p>
        </div>
      </div>
    </div>
  );
}

export default Content;
