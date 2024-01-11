import React, { useEffect, useState } from "react";

function FlowerPricing() {
  const [flowers, setFlowers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/flowers")
      .then((res) => res.json())
      .then((data) => setFlowers(data));
  }, []);
  function handleDelete(id) {
    fetch(`http://localhost:3000/flowers/${id}`, {
      method: "DELETE",
    }).then(() =>
      setFlowers((prevFlowers) =>
        prevFlowers.filter((flower) => flower._id !== id)
      )
    );
  }
  return (
    <div className="flowerPricing">
      <p className="title">Devoted to wonderful beauty</p>
      <h1>Flowers Pricing</h1>
      <div className="cards">
        {flowers.map((x) => (
          <div className="card" key={x._id}>
            <i
              class="fa-regular fa-trash-can"
              onClick={() => handleDelete(x._id)}
            ></i>
            <img src={x.image} alt="" />
            <div className="text">
              <p>{x.name}</p>
              <span>${x.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FlowerPricing;
