import React, { useEffect, useState } from "react";

import styles from "./Landing.module.css";

import Loader from "./Loader";
import Coin from "./Coin";

import { getCoin } from "../services/api";

const Landing = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchAPI = async () => {
      const data = await getCoin();
      console.log(data);
      setCoins(data);
    };

    fetchAPI();
  }, []);

  const searchHandeler = (event) => {
    setSearch(event.target.value);
  };

  const searchedCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={styles.container}>
        <h1>Market</h1>
      <input
        className={styles.input}
        type="text"
        placeholder="Search"
        value={search}
        onChange={searchHandeler}
      />
      {coins.length ? (
        <div className={styles.coinContainer}>
          {searchedCoins.map((coin) => (
            <Coin
              key={coin.id}
              name={coin.name}
              image={coin.image}
              symbol={coin.symbol}
              price={coin.current_price}
              marketCap={coin.market_cap}
              priceChange={coin.price_change_percentage_24h}
            />
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Landing;
