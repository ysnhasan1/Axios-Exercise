import React, { useState, useEffect } from "react";
import Loading from "./components/Loading.jsx";

import "./App.css";

// To install package: `npm install react-icons`
import { GiShoppingCart } from "react-icons/gi";

// To install package: `npm install axios`
import axios from "axios";

function App() {
  const [getDatas, setgetDatas] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getDataFunc() {
      setLoading(true); // The loading process begins  // loading = true;

      const datasFromURL = await axios.get("https://fakestoreapi.com/products");
      // console.log(datasFromURL);
      // console.log(datasFromURL.data); // Returns a 20-element array where each element is an object.
      setgetDatas(datasFromURL.data); // getDatas = datasFromURL.data;

      setLoading(false); // The loading process end  // loading = false;
    }

    getDataFunc(); // function call
  }, []);

  // console.log(getDatas);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <h1 style={{ textAlign: "center" }}>Product List</h1>

          <div className="flex-container">
            {getDatas &&
              getDatas.map((eachData, index) => {
                return (
                  <div className="flex-item" key={index}>
                    <img
                      src={eachData.image}
                      alt={eachData.id + " image"}
                    ></img>
                    <h2>{eachData.title}</h2>
                    <h3>
                      <span id="dolar-span">$</span>
                      {eachData.price}
                    </h3>
                    <div id="shopping-cart">
                      <GiShoppingCart />
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      )}
    </>
  );
}

export default App;
