import React, { useState, useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

export default function AddTransaction() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const { addTransaction } = useContext(GlobalContext);

  const submit = (e) => {
    e.preventDefault();
    setText("");
    setAmount("");
    
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: Number(amount),
    };

    addTransaction(newTransaction);
  };

  return (
    <>
      <section className="mt-4">
        <h4 className='heading1 fw-bold'>Add new transaction</h4>
        <hr />
        <form className="py-2" onSubmit={submit}>
          <div className="mb-3">
            <label htmlFor="textInput" className="form-label">
              Text
            </label>
            <input
              type="text"
              className="form-control"
              id="textInput"
              placeholder="Enter text..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="textAmount" className="form-label">
              Amount
              <br />
              (negative-expense, positive-income)
            </label>
            <input
              type="number"
              className="form-control"
              id="textAmount"
              placeholder="Enter amount..."
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <button disabled={text.length === 0} type="submit" className="btn btn-primary w-100">
            Add Transaction
          </button>
        </form>
      </section>
    </>
  );
}
