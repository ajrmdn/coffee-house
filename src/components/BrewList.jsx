import React from "react";
import Brew from "./Brew";

const masterBrewList = [
  {
    name: 'Morning Brew',
    flavor: 'Wake up with Lake',
    brand: 'Blake Brews',
    price: '$3'
  },
  {
    name: 'Afternoon Walk',
    flavor: 'Lake Jams',
    brand: 'Blake Brews',
    price: '$3'
  },
  {
    name: 'Afternoon Double',
    flavor: 'Pair Partner with Lake',
    brand: 'Blake Brews',
    price: '$3'
  },
  {
    name: 'Late Night High',
    flavor: 'Stay Up With Lake',
    brand: 'Blake Brews',
    price: '$3'
  },
  {
    name: 'Decaf Fashion',
    flavor: 'Napping with Cord',
    brand: 'Blake Brews',
    price: '$3'
  },
];

function BrewList(){

  return (
    <div>
      <hr/>
      {masterBrewList.map((brew, index) =>
        <Brew name={brew.name}
          flavor={brew.flavor}
          brand={brew.brand}
          price={brew.price}
          key={index} />
      )}
    </div>
  );
};



export default BrewList;
