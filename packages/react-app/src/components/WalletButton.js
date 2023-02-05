import React, { useEffect, useState } from "react";
import { shortenAddress, useEthers, useLookupAddress } from "@usedapp/core";
import styles from "../styles";

export default function WalletButton() {
  const [accountAddress, setAccountAdress] = useState("");
  const { ens } = useLookupAddress();
  const { account, activateBrowserWallet, deactivate } = useEthers();

  useEffect(() => {
    if (ens) setAccountAdress(ens);
    else if (account) setAccountAdress(shortenAddress(account));
    else setAccountAdress("");
  }, [account, ens, setAccountAdress]);

  return (
    <button
      onClick={() => {
        if (!account) {
          activateBrowserWallet();
        } else {
          deactivate();
        }
      }}
      className={styles.walletButton}
    >
      {accountAddress || "Connect Wallet"}
    </button>
  );
}
