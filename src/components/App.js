import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {

  const [suShiList, setSuShiList] = useState([])
  const [plates, setPlates] = useState([])
  const [money, setMoney] = useState(100)

  //const [eaten, setEaten] = useState(false)

  useEffect(()=>{
    fetch("http://localhost:3001/sushis")
    .then(resp => resp.json())
    .then(data => setSuShiList(data))
  }, [])

  function handleEat(price){
    if(money >= price){
      const remainMoney = money - price
      setMoney(remainMoney)
      setPlates([...plates, price])
    }
  }

  return (
    <div className="app">
      <SushiContainer suShiList={suShiList} onHandleEat={handleEat} money={money} />
      <Table plates={plates} money={money}/>
    </div>
  );
}

export default App;
