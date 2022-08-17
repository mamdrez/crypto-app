import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import styles from "./Home.module.css";
import Topcoin from "./Topcoin";

import { getCoin } from "../services/api";

const Home = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const data = await getCoin();
      const topThere = data.slice(0, 4);
      console.log(topThere);
      setCoins(topThere);
    };

    fetchAPI();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <button className={styles.button}><Link to='/market'>Cheak Market</Link></button>
        <h1>
          All In One, <br />
          Cryptocurrency Solutions!
        </h1>
      </div>
      <div className={styles.topCard}>
        {coins.map((coin) => (
          <Topcoin
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
    </div>
  );
};

export default Home;
