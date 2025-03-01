import React, { useState } from "react";

function Sushi( { name, img, price, onHandleEat, money}) {
  const [eaten, setEaten] = useState(false)

  function onHandleEatClick(){
    if(eaten == false && money >= price){
      setEaten(true)
      onHandleEat(price)
    }
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={onHandleEatClick} >
        {/* Tell me if this sushi has been eaten! */}
        {eaten ? null : (
          <img
            src={img}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
