import React from "react";
import "./index.css";
import styles from "./styles";

const App = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <header className={styles.header}>
          <img />
          Wallet Button
        </header>
        <div className={styles.exchangeContainer}>
          <h1 className={styles.headTitle}>MyCryptoSwap</h1>
          <p className={styles.subTitle}>Exchange tokens in seconds</p>
          <div className={styles.exchangeBoxWrapper}>
            <div className={styles.exchangeBox}>
              <div className="pink_gradient" />
              <div className={styles.exchange}>

              </div>
              <div className="blue_gradient" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
