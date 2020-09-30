import React from "react";


const Pokecard = ({name, image, type}) => {

  return (
    <div className="pokecard">
    <img src='' alt=''/>
      <p>{name}</p>
      <p>{type}</p>
    </div>
  );
};

export default Pokecard;
