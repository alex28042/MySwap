import React from "react";
import { getFailureMessage, getSuccessMessage, isOperationPending } from "../utils";
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
      {"approvedNeeded" && !isSwapping} (
        <button>
          {isApproving ? "Approving..." : "Approve"} 
        </button>
      )
    </div>
  );
}
