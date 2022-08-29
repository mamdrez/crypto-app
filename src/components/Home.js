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
        <div className={styles.textCard}>Top #4</div>
        <button className={styles.button}>
          <Link to="/market">Cheak Market</Link>
        </button>
        <div className={styles.containerTextHeader}>
          <div className={styles.contentTextheader}>
            <div className={styles.textHeader}>All In One,</div>
            <div className={styles.textHeader}> Cryptocurrency Solutions!</div>
          </div>
        </div>
      </div>
      <div className={styles.cards}>
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
    </div>
  );
};

export default Home;
