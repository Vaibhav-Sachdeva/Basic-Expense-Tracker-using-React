import React, { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm(props){
    const[enteredName, setEnteredName] = useState('');
    const[enteredAmount, setEnteredAmount] = useState('');
    const[enteredDate, setEnteredDate] = useState('');

    // const [userInput, setUserInput] = useState({
    //     enteredName: '',
    //     enteredAmount:'',
    //     enteredDate:''
    // })

    function nameChangeHandler(event){
        setEnteredName(event.target.value);
    }

    function amountChangeHandler(event){
        setEnteredAmount(event.target.value);
    }

    
    function dateChangeHandler(event){
        setEnteredDate(event.target.value);
    }

    // function nameChangeHandler(event){
    //     setUserInput(function (prevState){
    //         return({
    //             ...prevState,
    //             enteredName : event.target.value
    //         })
    //     })
    // }

    // function amountChangeHandler(event){
    //     setUserInput(function(prevState){
    //         return({
    //             ...prevState,
    //             enteredAmount : event.target.value
    //         });
    //     })
    // }

    // function dateChangeHandler(event){
    //     setUserInput(function(prevState){
    //         return({
    //             ...prevState,
    //             enteredDate : event.taregt.value
    //         });
    //     })
    // }

    function submitHandler(event){
        event.preventDefault();

        const expenseData = {
            name : enteredName,
            amount : +enteredAmount,
            date : new Date(enteredDate)
        }
        props.onFormData(expenseData);
        setEnteredName('');
        setEnteredAmount('');
        setEnteredDate('');


    }

    return(
        <form onSubmit = {submitHandler}>
            <div className = 'new-expense__controls'>
                <div className = 'new-expense__control'>
                    <label>Name</label>
                    <input type = 'text' value = {enteredName} onChange = {nameChangeHandler}></input>
                </div>
            </div>
            <div className = 'new-expense__controls'>
                <div className = 'new-expense__control'>
                    <label>Amount</label>
                    <input type = 'number' value = {enteredAmount} onChange = {amountChangeHandler}></input>
                </div>
            </div>
            <div className = 'new-expense__controls'>
                <div className = 'new-expense__control'>
                    <label>Date</label>
                    <input type = 'date' value = {enteredDate} onChange = {dateChangeHandler} min = '2019-01-01' max = '2022-12-31'></input>
                </div>
            </div>
            <div className = "new-expense__actions">
                <button type = 'button' onClick = {props.onCancel}>Cancel</button>    
                <button type = 'submit'>Add Expense</button>
            </div>
        </form>
    );


}
export default ExpenseForm;