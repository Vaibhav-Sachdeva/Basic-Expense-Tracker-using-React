
import React from 'react';
import "./ExpenseItem.css"
import ExpenseDate from "./ExpenseDate"
import Card from '../UI/Card'
import './Button.css'

function ExpenseItem(props) {
    // const [name, setName] = useState(props.name);
    // const [amount, setAmount] = useState(props.amount);
    // const [date, setDate] = useState(props.date);
    // function clickHandler() {
    //      setName(null);
    //      setAmount(null);
    //      setDate(new Date (2012, 5, 5)); 
    // }
    
    return (
        <li>
        <Card className = 'expense-item'>
        <ExpenseDate date = {props.date}></ExpenseDate>
        <div className = 'expense-item__description'>
            <h2>{props.name}</h2>
            <div className = 'expense-item__price'>${props.amount}</div>
        </div>
        {/* <button className = 'button' onClick = {clickHandler}>Remove Item</button> */}
        </Card>
        </li>
    );
}

export default ExpenseItem;