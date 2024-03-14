import React from "react";
import "../css/content.css";

function Brands() {
  return (
    <div className="brand-section">
      <h2>Top brands for you</h2>
      <div className="inspiration-images">
        <div className="image-container">
          <img
            src="https://b.zmtcdn.com/data/brand_creatives/logos/77d5b489b0ea3773900191553512b17d_1605103915.png?output-format=webp"
            alt="Harilal"
          />
          <p>Harilal's</p>
        </div>
        <div className="image-container">
          <img
            src="https://b.zmtcdn.com/data/brand_creatives/logos/5caf38856d23347b351bb7abf97134d3_1521806923.png?output-format=webp"
            alt="Domino"
          />
          <p>Domino's Pizza</p>
        </div>
        <div className="image-container">
          <img
            src="https://b.zmtcdn.com/data/brand_creatives/logos/c505604a9a42be5e6d3644e4a28acd84_1678081788.png?output-format=webp"
            alt="Biryani"
          />
          <p>Biryani Mahal</p>
        </div>
        <div className="image-container">
          <img
            src="https://b.zmtcdn.com/data/brand_creatives/logos/0c45494107cfd8e2d6e9bd855bfec678_1669019617.png?output-format=webp"
            alt="Kilo"
          />
          <p>Biryani By Kilo</p>
        </div>
        <div className="image-container">
          <img
            src="https://b.zmtcdn.com/data/brand_creatives/logos/1005fb0c9e31b63b7c3f9e825d62a3d8_1605103758.png?output-format=webp"
            alt="Bikaner"
          />
          <p>Bikaner Sweets</p>
        </div>
        <div className="image-container">
          <img
            src="https://b.zmtcdn.com/data/brand_creatives/logos/466f8fc74274145f3b21795c3d21816d_1589433965.png?output-format=webp"
            alt="KFC"
          />
          <p>KFC</p>
        </div>
      </div>
    </div>
  );
}

export default Brands;
