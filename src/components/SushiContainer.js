import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer( { suShiList, onHandleEat, money }) {

  const [number, setNumber] = useState(0)

  const suShiElement = suShiList.map((suShi) => {
    return <Sushi key={suShi.id} name={suShi.name} 
      img={suShi.img_url} price={suShi.price}
      onHandleEat={onHandleEat} money={money}/>
  })

  const suShiToShow = suShiElement.slice(number, number+4)

  function handleMore(){
    const newNumber = number + 4 
    setNumber(newNumber)
  }

  return (
    <div className="belt">
      {/* Render Sushi components here! */}
      {suShiToShow}
      <MoreButton onHandleMore={handleMore} />
    </div>
  );
}

export default SushiContainer;
