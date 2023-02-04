import React from "react";
import "./index.css";
import styles from "./styles";
import { useEthers } from "@usedapp/core";
import Exchange from "./components/Exchange";
import Loader from "./components/Loader";

const App = () => {
  const { account } = useEthers();
  const poolsLoading = false;

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
                <p className="text-white">
                  {account ? (
                    poolsLoading ? (
                      <Loader title="Loading pools, please wait!" />
                    ) : (
                      <Exchange />
                    )
                  ) : (
                    <Loader title="Please connect your wallet" />
                  )}
                </p>
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
