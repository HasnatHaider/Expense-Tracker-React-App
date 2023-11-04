import React, { useContext } from "react";
import TransactionPoints from "./TransactionPoints";
import { GlobalContext } from "../Context/GlobalState";

export default function TransactionList() {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <section className="mb-3">
        <h4 className='heading1 fw-bold'>History</h4>
        <hr />
        <ul className="list list-group">
          {transactions.map(transactions => (
            <TransactionPoints 
              key = {transactions.id}
              id={transactions.id}
              transactions = {transactions.text}
              transactionsAmount = {transactions.amount}
            />
          ))}
        </ul>
      </section>
    </>
  );
}
