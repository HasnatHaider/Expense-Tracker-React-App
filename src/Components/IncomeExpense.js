import React, { useContext } from 'react'
import { GlobalContext } from "../Context/GlobalState";

export default function IncomeExpense() {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transactions => transactions.amount);

  const incomes = amounts.filter(items => items > 0).reduce((acc, curr) => (acc += curr), 0).toFixed(2)

  const expenses = (amounts.filter(items => items < 0).reduce((acc, curr) => (acc += curr), 0) * -1).toFixed(2)

  return (
    <>
      <section>
        <div className='income_Expenese d-flex justify-content-evenly align-items-center border-2 my-4'>
            <div>
                <h5>Income</h5>
                <p className='plus h5 pt-2'>{incomes}</p>
            </div>
            <div>
                <h5>Expense</h5>
                <p className='minus h5 pt-2'>{expenses}</p>
            </div>
        </div> 
      </section>
    </>
  )
}
