import React from "react";
import styles from "../styles";
import {
  getFailureMessage,
  getSuccessMessage,
  isOperationPending,
} from "../utils";
import AmountIn from "./AmountIn";
import AmountOut from "./AmountOut";
import Balance from "./Balance";

export default function Exchange({ pools }) {
  const isApproving = isOperationPending("approve");
  const isSwapping = isOperationPending("swap");

  //const successMessage = getSuccessMessage()
  //const failureMessage = getFailureMessage()

  return (
    <div className="flex flex-col w-full items-center">
      <div className="mb-8">
        <AmountIn />

        <Balance />
      </div>
      <div className="mb-8 w-[100%]">
        <AmountOut />

        <Balance />
      </div>
      {"approvedNeeded" && !isSwapping ? (
        <button
          disabled={!"canApprove"}
          onClick={() => {}}
          className={
            "canApprove"
              ? "bg-site-pink text-white"
              : "bg-site-dim2 text-site-dim2"`${styles.actionButton}`
          }
        >
          {isApproving ? "Approving..." : "Approve"}
        </button>
      ) : (
        <button
          disabled={!"canSwap"}
          onClick={() => {}}
          className={
            "canSwap"
              ? "bg-site-pink text-white"
              : "bg-site-dim2 text-site-dim2"`${styles.actionButton}`
          }
        >
          {isSwapping
            ? "Swapping..."
            : "hasEnoughBalance"
            ? "Swap"
            : "Insufficient balance"}
        </button>
      )}

      {"failureMessage" && !"resetState" ? (
        <p className={styles.message}>{"failureMessage"}</p>
      ) : (
        <p className={styles.message}>{"successMessage"}</p>
      )}
    </div>
  );
}
