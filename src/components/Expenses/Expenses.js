import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {
  const [year, setYear] = useState("2021");
  function filterChangeHandler(selectedYear) {
    setYear(selectedYear);
  }

  const filteredItems = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={year}
        onSelectingYear={filterChangeHandler}
      />
      <ExpensesChart expenses = {filteredItems} />
      <ExpensesList items = {filteredItems}/>
      {/* Part after && is rendered if the part before && returns true */}
      {/* {filteredItems.length === 0 && <p>No Items Found</p>} */}
      {/* {filteredItems.length > 0 &&
        filteredItems.map((expense) => (
          <ExpenseItem
            key={expense.id}
            name={expense.name}
            amount={expense.amount}
            date={expense.date}
          ></ExpenseItem>
        ))} */}
      {/* {filteredItems.length === 0 ? (
        <p>No Items Found</p>
      ) : (
        filteredItems.map((expense) => (
          <ExpenseItem
            key={expense.id}
            name={expense.name}
            amount={expense.amount}
            date={expense.date}
          ></ExpenseItem>
        ))
      )} */}
      {/* <ExpenseItem
        name={props.item[0].name}
        amount={props.item[0].amount}
        date={props.item[0].date}
      ></ExpenseItem>
      <ExpenseItem
        name={props.item[1].name}
        amount={props.item[1].amount}
        date={props.item[1].date}
      ></ExpenseItem>
      <ExpenseItem
        name={props.item[2].name}
        amount={props.item[2].amount}
        date={props.item[2].date}
      ></ExpenseItem>
      <ExpenseItem
        name={props.item[3].name}
        amount={props.item[3].amount}
        date={props.item[3].date}
      ></ExpenseItem>
      <ExpenseItem
        name={props.item[4].name}
        amount={props.item[4].amount}
        date={props.item[4].date}
      ></ExpenseItem> */}
    </Card>
  );
}

export default Expenses;
