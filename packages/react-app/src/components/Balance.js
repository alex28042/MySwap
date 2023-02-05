import React from "react";
import styles from "../styles";
import { formatUnits, parseUnits } from "ethers/lib/utils";

function Balance() {
  const tokenBalance = parseUnits("00.00034");
  return (
    <div className={styles.balance}>
      <p className={styles.balanceText}>
        {tokenBalance && (
          <>
            <span className={styles.balanceBold}>Balance:</span>
            {formatUnits(tokenBalance || parseUnits("0"))}
          </>
        )}
      </p>
    </div>
  );
}

export default Balance;
