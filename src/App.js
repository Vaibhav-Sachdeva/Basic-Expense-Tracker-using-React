
import React, {useState} from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpense/NewExpense';

const initial_expenses = [
  // {
  //   name: "Car Insurance",
  //   amount: 137,
  //   date: new Date(2021, 3, 21),
  //   id: 1,
  // },
  // {
  //   name: "Health Insurance",
  //   amount: 112,
  //   date: new Date(2020, 3, 28),
  //   id: 2,
  // },
  // {
  //   name: "House Tax",
  //   amount: 89, 
  //   date: new Date(2020, 4, 2),
  //   id: 3,
  // },
  // {
  //   name: "Wooden Table",
  //   amount: 120, 
  //   date: new Date(2019, 4, 2),
  //   id: 3,
  // }
];

function App() {

  const [expenses, setExpenses] = useState(initial_expenses);

  function addExpenseHandler(expense){

    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    });
  }

  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler}></NewExpense>
      <Expenses item = {expenses}></Expenses>
    </div>
  );
}

export default App;
