import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

export default function TransactionPoints({
  transactions,
  transactionsAmount,
  id,
}) {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transactionsAmount < 0 ? "-" : "+";

  return (
    <>
      <li
        className={`${
          transactionsAmount < 0 ? "minus" : "plus"
        } list-group-item d-flex justify-content-between position-relative my-2`}
      >
        {transactions}
        <span>
          {sign}${Math.abs(transactionsAmount)}
        </span>
        <button
          className="delete-btn"
          onClick={() => deleteTransaction(id)}
        >
          x
        </button>
      </li>
    </>
  );
}
