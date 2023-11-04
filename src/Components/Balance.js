import React, { useContext } from 'react'
import { GlobalContext } from "../Context/GlobalState";

export default function Balance() {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transactions => transactions.amount);
  const total = amounts.reduce((acc, curr) => (acc += curr), 0).toFixed(2);

  return (
    <>
        <section>
            <h4 className='fw-bold mb-3'>Your Balance</h4>
            <h3 className={`${total < 0 ? 'text-danger' : 'text-light'}`}>${total}</h3>
        </section>
    </>
  )
}
